describe('Header', function() {

    it('should display hello world then sessionstorage.EBSCO_WIDGET_username value once set', function (done) {
        browser
        .waitForElementVisible('.connexion', 1000)
        .assert.containsText('.name', 'Bonjour')
        .setSessionStorageKey('EBSCO_WIDGET_username', 'storage')
        .pause(1000)
        .assert.containsText('.name', 'Bonjour storage');

        client.start(done);
    });

    it('should display hello world then sessionstorage.EBSCO_WIDGET_domain value once set', function (done) {
        browser
        .waitForElementVisible('.connexion', 1000)
        .assert.containsText('.domain', 'Connectez-vous !')
        .setSessionStorageKey('EBSCO_WIDGET_domain', 'insb')
        .pause(1000)
        .assert.containsText('.domain', 'Votre domaine principal : insb');

        client.start(done);
    });
    it('should display hello world then sessionstorage.EBSCO_WIDGET_availableDomains value once set', function (done) {
        browser
        .waitForElementVisible('.connexion', 1000)
        .assert.containsText('.otherDomains', '')
        .setSessionStorageKey('EBSCO_WIDGET_availableDomains', '["insb","inshs"]')
        .pause(1000)
        .assert.containsText('.otherDomains', 'Les domaines possibles : insb, inshs');

        client.start(done);
    });

});
