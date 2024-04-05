var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "mysql16.mydevil.net",
    database: "m1175_praktyki",
    user: "m1175_praktyki",
    password: "aYyV2Rsf2hfVST4"
});

module.exports = {
    test: (req, cb) => {
        connection.connect(function(){
            console.log("Connected");
        
            //let sql = "SELECT * FROM logowanie";
            connection.query("INSERT INTO praktyki SET ?", {imie:req.imie, nazwisko:req.nazwisko}, function(err, res){
                if (err){
                    console.log("NIE OK", err);
                    return cb(err);
                }
                return cb("ok")
            })
        });
    }
}