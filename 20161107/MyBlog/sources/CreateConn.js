/**
 * Created by Administrator on 2016/11/7 0007.
 */

const mysql = require("mysql");

/**
 * @returns {Connection}
 */
module.exports = function () {
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "blog"
    });

    conn.connect1 = function () {
        return new Promise(function (resolve, reject) {
            conn.connect(function (err) {
                if (!err) {
                    resolve(conn);
                } else {
                    reject(err);
                }
            });
        });
    };

    conn.query1 = function (sql, values) {
        return new Promise(function (resolve, reject) {
            conn.query(sql, values, function (err, rows) {
                if (!err) {
                    resolve(rows);
                } else {
                    reject(err);
                }
            });
        });
    };

    return conn;
};