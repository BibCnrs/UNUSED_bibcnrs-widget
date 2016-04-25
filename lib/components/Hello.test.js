import Hello from './Hello';

describe('Hello', function () {

    it('should display hello bibcnrs', function () {
        const component = enzyme.shallow(<Hello name="bibcnrs" />);
        const h1 = component.find('h1');
        assert.equal(h1.text(), 'Hello bibcnrs');
    });
});
