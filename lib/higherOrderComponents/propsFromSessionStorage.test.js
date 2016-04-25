import { PropTypes } from 'react';

import propsFromSessionStorage from './propsFromSessionStorage';

const Hello = ({ greeting, name }) => (<h1>{greeting} { name }</h1>);
Hello.propTypes = {
    name: PropTypes.string,
    greeting: PropTypes.string
};

describe('propsFromSessionStorage', function () {
    let storage;
    before(function () {
        window.sessionStorage = {
            getItem: (key) => storage[key]
        };
    });

    beforeEach(function () {
        storage = {
            greeting: 'hello',
            name: 'world'
        };
    });

    it('should initialize given props key from sessionStorage ignoring props', function () {
        const Component = propsFromSessionStorage(Hello, ['name', 'greeting']);
        const component = enzyme.mount(<Component name="nameProps" greeting="greetingProps" />);
        assert.deepEqual(component.state(), { greeting: 'hello', name: 'world' });
        const h1 = component.find('h1');
        assert.equal(h1.text(), 'hello world');
    });

    it('should use props if no corresponding key in storage', function () {
        storage = {
            name: 'bibcnrs'
        };
        const Component = propsFromSessionStorage(Hello, ['name', 'greeting']);
        const component = enzyme.mount(<Component greeting="props greeting" />);
        assert.deepEqual(component.state(), { name: 'bibcnrs' });
        const h1 = component.find('h1');
        assert.equal(h1.text(), 'props greeting bibcnrs');
    });

    it('should rerender when changing sessionStorage value after 1000 ms', function (done) {
        const Component = propsFromSessionStorage(Hello, ['name', 'greeting']);
        const component = enzyme.mount(<Component />);
        assert.deepEqual(component.state(), { greeting: 'hello', name: 'world' });
        const h1 = component.find('h1');
        assert.equal(h1.text(), 'hello world');
        storage = {
            greeting: 'goodbye',
            name: 'everyone'
        };
        assert.equal(h1.text(), 'hello world');
        setTimeout(function () {
            try {
                assert.equal(h1.text(), 'goodbye everyone');
            } catch (error) {
                return done(error);
            }
            done();
        }, 1000);
    });

    after(function () {
        delete window.sessionStorage;
    });
});
