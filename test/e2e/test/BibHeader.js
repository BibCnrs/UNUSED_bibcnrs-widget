describe('Header', function() {

    it('should display hello world then sessionstorage.EBSCO_WIDGET_username value once set', function (done) {
        browser
        .waitForElementVisible('.connexion', 1000)
        .assert.containsText('.name', '')
        .setSessionStorageKey('EBSCO_WIDGET_username', 'storage')
        .pause(1000)
        .assert.containsText('.name', 'storage');

        client.start(done);
    });

    it('should display hello world then sessionstorage.EBSCO_WIDGET_domain value once set', function (done) {
        browser
        .waitForElementVisible('.connexion', 1000)
        .assert.attributeEquals('.bibcnrslogo', 'alt', 'logo bibcnrs ')
        .setSessionStorageKey('EBSCO_WIDGET_domain', 'INSB')
        .pause(2000)
        .assert.attributeEquals('.bibcnrslogo', 'alt', 'logo bibcnrs INSB');

        client.start(done);
    });

    it('should display hello world then sessionstorage.EBSCO_WIDGET_availableDomains value once set', function (done) {
        browser
        .waitForElementVisible('.connexion', 1000)
        .assert.containsText('.otherDomains', '')
        .setSessionStorageKey('EBSCO_WIDGET_availableDomains', '["insb","inshs"]')
        .pause(1000)
        .assert.containsText('.otherDomains', 'Domaines autorisés : insb, inshs');

        client.start(done);
    });

});
