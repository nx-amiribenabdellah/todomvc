var phantom = require('phantom');
phantom.create(function(ph) {
    return ph.createPage(function(page) {
        return page.open("http://localhost:8090/runner.html", function(status) {
            return page.evaluate((function() {

                var results = $(document.body).find('.description')[0].text;
                var failures = $(document.body).find(".description:contains('failures')");
                if (failures.size() > 0) return "All tests passed! %@".fmt(results);

                var suite = $(document.body).find('.suite.failed').find('.description')[0].text;
                var name = $(document.body).find('.spec.failed').find('.description').text();
                var error = $(document.body).find('.spec.failed').find('.resultMessage.fail').text();
                var stack = $(document.body).find('.spec.failed').find('.stackTrace').text();
                return "%@ '%@ %@' %@ %@".fmt(results, suite, name, error, stack);

            }), function(result) {
                console.log(result);
                return ph.exit();
            });
        });
    });
});