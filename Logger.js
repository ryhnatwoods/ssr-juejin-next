const path = require("path");
const bunyan = require("bunyan");
const log = bunyan.createLogger({
    name: 'juejin-ssr',
    serializers: {
        req: reqSerializer
    },
    streams: [{
        type: 'rotating-file',
        path: path.join(path.resolve('./log'), "api.log"),
        period: '1d',   // daily rotation
        count: 3        // keep 3 back copies
    }]
});

function reqSerializer(req) {
    return {
        method: req.method,
        url: req.url,
        headers: req.headers
    };
}

module.exports = log;