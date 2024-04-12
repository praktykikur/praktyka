var nodemailer = require('nodemailer');
const send = async () => {
    var transporter = nodemailer.createTransport({
        host: 'imap.poczta.onet.pl',
        port: 993,
        secure: true,
        requireTLS:false,
        auth: {
            user: 'hziom@op.pl',
            pass: 'Kappamaster123'
        },
        
    });
    console.log(transporter)
    var mailOptions = {
        from: {
            name: "123",
            address: 'hziom@op.pl'
        },
        to: 'skewryj@gmail.com',
        subject: 'Kotki',
        text: 'Kocham klasyczne kotki',
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = send