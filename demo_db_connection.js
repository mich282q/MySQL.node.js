var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8305",
  database: "team2"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "Select 1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
