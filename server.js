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
            connection.query("INSERT INTO praktyki SET ?", {
                imie:req.imie,
                nazwisko:req.nazwisko,
                kodpocztowy:req.kodpocztowy,
                miasto:req.miasto,
                woj:req.woj,//d
                powiat:req.powiat,
                gmina:req.gmina,
                ulica:req.ulica,
                nrdomu:req.nrdomu, 
                nrlokalu:req.nrlokalu, 
                telefon:req.telefon, 
                email:req.email, 
                pesel:req.pesel, 
                nrkonta:req.nrkonta, 
                miejscepraktyk:req.miejscepraktyk, 
                klasa:req.klasa, 
                kierunek:req.kierunek,
                plec:req.plec,
                niepelnosprawnosc:req.niepelnosprawnosc}, function(err, res){
                if (err){
                    console.log("NIE OK", err);
                    return cb(err);
                }
                return cb("ok")
            })
        });
    }
}