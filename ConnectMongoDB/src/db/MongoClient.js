/**
 * Created by Administrator on 2016/11/8 0008.
 */


const mongo = require("mongodb");
const client = mongo.MongoClient;

/**
 * @returns {Promise}
 */
client.connect1 = function () {
    return this.connect("mongodb://localhost/myblog");
};

module.exports = mongo.MongoClient;