var redis = require('redis');

/**
 * Returns the x most recent downloaded URLs
 *
 * @param {count} how many to retrieve
 * return {array}
 */
getRecentDownloads = function(count){
    var client = redis.createClient(),
        downloadArr = [],
        recentDownloads = client.lrange("recentdownloads", 0 , count, function(err, downloads) {
            downloads.forEach(function(download, index){
                downloadArr.push(download);
            });
        });

    return downloadArr;
};

/*
 * GET home page.
 */
exports.downloads = function(req, res){
    var response = {
        downloads: [
            'http://jsfiddle.net/commadelimited/SA45t/2/',
            'http://jsfiddle.net/odigity/zS5uu/',
            'http://jsfiddle.net/mT76T/17/',
            'http://codepen.io/katmai7/pen/cDtIo',
            'http://jsbin.com/oxuyop/777',
        ]
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(response));
    res.end();
};