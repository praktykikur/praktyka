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
            connection.query("INSERT INTO praktyki SET ?", { imie:req.imie, nazwisko:req.nazwisko, kod_pocztowy:req.kodpocztowy, miejscowosc:req.miasto, wojewodztwo:req.woj, powiat:req.powiat, gmina:req.gmina, ulica:req.ulica, nr_domu:req.nr_domu, nr_lokalu:req.nr_lokalu, telefon:req.telefon, email:req.email, pesel:req.pesel, nr_konta:req.rachunek, miejsce_stazu:req.miejsce_praktyk, klasa:req.klasa, kierunek:req.kierunek_zaw}, function(err, res){
                if (err){
                    console.log("NIE OK", err); //eryk to cwel
                    return cb(err);
                }
                return cb("ok")
            })
        });
    }
}