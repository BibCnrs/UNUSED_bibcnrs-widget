describe('helloBibCnrs', function() {

    it('should display hello world then sessionstorage.name value once set', function (done) {
        browser
        .waitForElementVisible('h1', 1000)
        .assert.containsText('h1', 'Hello world')
        .setSessionStorageKey('name', 'storage')
        .pause(1000)
        .assert.containsText('h1', 'Hello storage');

        client.start(done);
    });
});
