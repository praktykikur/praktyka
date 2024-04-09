const script = {
    isEmpty:(str) => {
        return (!str || str.trim() === '');
    },
    test:() => {
        const imie = document.querySelector('input[name="imie"]').value;
        const nazwisko = document.querySelector('input[name="nazwisko"]').value;
        const kodpocztowy = document.querySelector('input[name="kodpocztowy"]').value;
        const miasto = document.querySelector('input[name="miasto"]').value;
        const woj = document.querySelector('input[name="woj"]').value;
        const powiat = document.querySelector('input[name="powiat"]').value;
        const gmina = document.querySelector('input[name="gmina"]').value;
        const ulica = document.querySelector('input[name="ulica"]').value;
        const nrdomu = document.querySelector('input[name="nrdomu"]').value;
        const nrlokalu = document.querySelector('input[name="nrlokalu"]').value;
        const telefon = document.querySelector('input[name="telefon"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const pesel = document.querySelector('input[name="pesel"]').value;
        const nrkonta = document.querySelector('input[name="rachunek"]').value;
        const klasa = document.querySelector('input[name="klasa"]').value;
        const kierunek = document.querySelector('input[name="kierunek_zaw"]').value;
        const miejscepraktyk = document.querySelector('input[name="miejsce_praktyk"]').value;

        const c1 = document.querySelector("input[class='c1']").checked;
        const c2 = document.querySelector("input[class='c2']").checked;
        const c3 = document.querySelector("input[class='c3']").checked;
        const c4 = document.querySelector("input[class='c4']").checked;
        const c5 = document.querySelector("input[class='c5']").checked;
        const c6 = document.querySelector("input[class='c6']").checked;

        
        

        var plecRadio = document.getElementsByName('radioGen')
        for (var i = 0; i < 4; i++) {
            if (plecRadio[i].checked) {
                // Jeśli element jest zaznaczony, pobieramy jego wartość i przerywamy pętlę
                var selectedValuePlec = plecRadio[i].value;
                break;
            }
        }

        var niepelnosprawnoscRadio = document.getElementsByName('radioDis');
        for (var i = 0; i < 3; i++) {
            if (niepelnosprawnoscRadio[i].checked) {
                // Jeśli element jest zaznaczony, pobieramy jego wartość i przerywamy pętlę
                var selectedValueNiepelnosprawnosc = niepelnosprawnoscRadio[i].value;
                break;
            }
        }

        const formData = {
            imie: imie,
            nazwisko: nazwisko,
            kodpocztowy: kodpocztowy,
            miasto: miasto,
            woj: woj,
            powiat: powiat,
            gmina: gmina,
            ulica: ulica,
            nrdomu: nrdomu,
            nrlokalu: nrlokalu,
            telefon: telefon,
            email: email,
            pesel: pesel,
            nrkonta: nrkonta,
            klasa: klasa,
            kierunek: kierunek,
            miejscepraktyk: miejscepraktyk,
            plec:selectedValuePlec,
            niepelnosprawnosc:selectedValueNiepelnosprawnosc
        };

        var emptyFields = [];

        if (script.isEmpty(imie)) {
            emptyFields.push("Imię");
        }
        if (script.isEmpty(nazwisko)) {
            emptyFields.push("Nazwisko");
        }
        if (script.isEmpty(kodpocztowy)) {
            emptyFields.push("Kod pocztowy");
        }
        if (script.isEmpty(miasto)) {
            emptyFields.push("Miasto");
        }
        if (script.isEmpty(woj)) {
            emptyFields.push("Województwo");
        }
        if (script.isEmpty(powiat)) {
            emptyFields.push("Powiat");
        }
        if (script.isEmpty(gmina)) {
            emptyFields.push("Gmina");
        }
        if (script.isEmpty(ulica)) {
            emptyFields.push("Ulica");
        }
        if (script.isEmpty(nrdomu)) {
            emptyFields.push("Numer domu");
        }
        if (script.isEmpty(nrlokalu)) {
            emptyFields.push("Numer lokalu");
        }
        if (script.isEmpty(telefon)) {
            emptyFields.push("Telefon");
        }
        if (script.isEmpty(email)) {
            emptyFields.push("Email");
        }
        if (script.isEmpty(pesel)) {
            emptyFields.push("PESEL");//d
        }
        if (script.isEmpty(nrkonta)) {
            emptyFields.push("Numer konta");
        }
        if (script.isEmpty(klasa)) {
            emptyFields.push("Klasa");
        }
        if (script.isEmpty(kierunek)) {
            emptyFields.push("Kierunek zawodowy");
        }
        if (script.isEmpty(miejscepraktyk)) {
            emptyFields.push("Miejsce praktyk zawodowych");
        }

        if (emptyFields.length > 0) {
            alert("Uzupełnij brakujące pola: " + emptyFields.join(", "));
            return;
        }

        if (!script.isEmpty(imie) && !script.isEmpty(nazwisko) && !script.isEmpty(kodpocztowy) && !script.isEmpty(miasto) && !script.isEmpty(woj) && !script.isEmpty(powiat) && !script.isEmpty(gmina) && !script.isEmpty(ulica)
         && !script.isEmpty(ulica) && !script.isEmpty(nrdomu) && !script.isEmpty(nrlokalu) && !script.isEmpty(telefon) && !script.isEmpty(email) && !script.isEmpty(pesel) && !script.isEmpty(nrkonta) && !script.isEmpty(klasa)
         && !script.isEmpty(klasa) && !script.isEmpty(kierunek) && !script.isEmpty(miejscepraktyk)) {
            if (!c1 || !c2 || !c3 || !c4 || !c5 || !c6) {
                alert("Zaznacz wszystkie checkboxy");
            }
            else {
                fetch('/test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => {
                    if (response) { // Sprawdzamy, czy status odpowiedzi jest w zakresie 200-299
                        console.log('Dane formularza zostały wysłane pomyślnie!');
                    } else {
                        console.error('Wysłanie danych formularza nie powiodło się.');
                    }
                    console.log(response)
                    console.log(imie, nazwisko);
                })
                .catch(error => {
                    console.error('Wystąpił błąd podczas wysyłania danych formularza:', error);
                });
            }
            }
            document.getElementById("formId").reset();
        }
    }