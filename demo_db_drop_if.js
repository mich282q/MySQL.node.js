var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8305",
  database: "team2"
});

con.connect(function(err) {
  if (err) throw err;
  /*Delete the "customers" table, but only if it already exist (to avoid errors):*/
  var sql = "DROP TABLE IF EXISTS customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
