describe('helloBibCnrs', function() {

    it('should display hello BibCnrs', function (done) {
        browser
        .waitForElementVisible('h1', 1000)
        .assert.containsText('h1', 'Hello bibcnrs');

        client.start(done);
    });
});
