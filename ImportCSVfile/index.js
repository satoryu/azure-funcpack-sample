var csv = require('csv');

module.exports = function (context, myBlob) {
    csv.parse(myBlob, function(err, data) {
        if (err) {
            context.info(err);
            return;
        }

        context.log(data);
        context.done();
    });
};