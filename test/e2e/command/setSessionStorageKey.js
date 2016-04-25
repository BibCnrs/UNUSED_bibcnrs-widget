
exports.command = function(key, value, callback) {
    this.execute(
        function(key, value) {
            window.sessionStorage.setItem(key, value);

            return true;
        },
        [key, value],
        function(result) {
            if (typeof callback === 'function') {
                callback(self, result);
            }
        }
    );

    return this;
};
