const script = {
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

        const plec = document.querySelector('input[name="radioGen"]').value;
        const niepelnosprawnosc = document.querySelector('input[name="radioDis"]').value;

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
            plec:plec,
            niepelnosprawnosc:niepelnosprawnosc
        };

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
