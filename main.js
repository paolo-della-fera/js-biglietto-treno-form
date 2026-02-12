// mi richiamo i dati dall'html al js 
const btnEl = document.getElementById('btn');
const kmEl = document.getElementById('km');
const ageEl = document.getElementById('age');
const outputEl = document.getElementById('output')
const resetEl = document.getElementById('btn-reset')
const nameUl = document.getElementById('name')

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
    outputEl.innerHTML = `
  <div class="card shadow-sm">
    <div class="card-header d-flex justify-content-between align-items-center">
      <span class="fw-semibold">Recap biglietto</span>
    </div>

    <div class="card-body">
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <div class="text-muted small">Nome e Cognome</div>
          <div class="fw-semibold">${nameUl.value}</div>
        </div>

        <div class="col-6 col-md-3">
          <div class="text-muted small">Km</div>
          <div class="fw-semibold">${kmEl.value}</div>
        </div>

        <div class="col-6 col-md-3">
          <div class="text-muted small">Fascia età</div>
          <div class="fw-semibold">${ageEl.value}</div>
        </div>

        <div class="col-12">
          <hr class="my-2">
        </div>

        <div class="col-6">
          <div class="text-muted small">Prezzo finale</div>
          <div class="fs-4 fw-bold">${price.toFixed(2)}€</div>
        </div>
      </div>
    </div>
  </div>
`;

})


resetEl.addEventListener('click', function () {
    nameUl.value = '';
    kmEl.value = '';
    ageEl.value = '';
    outputEl.innerHTML = '';
})


