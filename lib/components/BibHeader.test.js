import { BibHeader } from './BibHeader';

describe('BibHeader', function () {

    it('should display BibHeader', function () {
        const props = {
            EBSCO_WIDGET_domain: 'insb',
            EBSCO_WIDGET_username: 'john doe',
            EBSCO_WIDGET_availableDomains: ['insb', 'inshs'],
            language: 'en'
        };

        const component = enzyme.shallow(<BibHeader { ...props } />);
        const div = component.find('.connexion');
        const img = div.find('.bibcnrslogo');
        assert.equal(img.props().src, 'lib/images/bibcnrs-logo-insb.png');
        const largetitleDiv = div.find('.largetitle');
        assert.equal(largetitleDiv.text(), 'CNRS research units documents access');
        const smalltitleDiv = div.find('.smalltitle');
        assert.equal(smalltitleDiv.text(), 'CNRS documents access');
        const nameDiv = div.find('.name');
        assert.equal(nameDiv.text(), 'john doe');
        const otherdomainsDiv = div.find('.otherdomains');
        assert.equal(otherdomainsDiv.text(), 'Authorized domains : insb, inshs');
    });
});
