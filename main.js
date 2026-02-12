// mi richiamo i dati dall'html al js 
const btnEl = document.getElementById('btn');
const kmEl = document.getElementById('km');
const ageEl = document.getElementById('age');
const outputEl = document.getElementById('output')

// prezzo per kilometro 
const priceKm = 0.21;


// dò il click al bottone che mi restituisce i valori inseriti negli input
btnEl.addEventListener('click', function () {

    // SE non vengono inseriti i dati stampo in console il messaggio 
    if (kmEl.value === '' || ageEl.value === '') {
        outputEl.innerHTML = 'Inserisci i tuoi dati';
        return
    }

    // prezzo per i maggiorenni 
    let price = kmEl.value * priceKm;

    // effettuo un controllo dell'età del passeggerio per capire se va applicato uno sconto
    // SE il passeggero è minorenna ha lo sconto del %20
    if (ageEl.value === 'Minorenne') {
        price = price * 0.8;

    }

    // ALTRIMENTI SE il passeggero è over 65 ha lo sconto del %40
    else if (ageEl.value === 'Over 65') {
        price = price * 0.6;

    }

    /* // stempo il risultato in console 
    console.log('Il prezzo del biglietto è: ' + price.toFixed(2) + '€'); */

    // mostro in pagina il recap dei dati e il prezzo del biglietto 
    outputEl.innerHTML =
        'Km: ' + kmEl.value + '<br>' +
        'Età: ' + ageEl.value + '<br>' +
        'Prezzo finale: ' + price.toFixed(2) + '€';
})



