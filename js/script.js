
const locations = {
    madrid: [
        { lat:40.456405086658194,  lng: -3.688907896855511, tittle: "Bernabeu"},
        { lat:40.42061406254445,  lng:-3.6890222666912194 , tittle: "Puerta de Alcala"},
        { lat:40.491089078668125,   lng: -3.5647155135021222, tittle: "Aeropuerto de Barajas"}
    ],
    paris: [
        { lat:48.8534, lng: 2.3488, tittle: "Torre Eiffel"},
        { lat:48.87499217828519,  lng: 2.2959531659624326, tittle: "Arco del triunfo"},
        { lat:48.85402852048143,  lng: 2.3502389585497423, tittle: "Nottre Dame"}
    ],
    roma: [
        {lat:41.90225999743756, lng:12.482865576406345, tittle: "Fontana de Trevi"},
        {lat:41.8921407223458, lng:12.492090678304947, tittle: "Coliseo"},
        {lat:41.89327876491798, lng:12.486571912390653, tittle: "Foro Romano"}
    ],
}










function initMap() {
const enviar = document.getElementById('enviar');
const ciudad = document.getElementById('ciudad').value;
const formulario = document.getElementById('formulario');
const mapa = document.getElementById('map');
formulario.style.display = 'block';

function initMap(lat, lng) {
    mapa.style.display = 'block';
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lng },
      zoom: 6,
    });
  }




enviar.addEventListener('click', function() {

    let lat;
    let lng;
    if (ciudad === 'madrid'){
        lat = 40.41895303835641
        lng = -3.7173449515944736
        initMap(lat, lng);
    }else if(ciudad === 'paris'){
        lat = 48.85879187839086
        lng = 2.352870623663526
        initMap(lat, lng);
    }else if(ciudad === 'roma'){
        lat = 41.89711601940518
        lng = 12.490647360010009
        initMap(lat, lng);
    }else if (ciudad === 'sarajevo'){
        lat = 43.85627799383089
        lng =  8.41245180743923
        initMap(lat, lng);
    }else if(ciudad === 'viena'){
        lat = 48.21269348527829
        lng =  16.36794393076543
        initMap(lat, lng);
    }
    formulario.style.display = 'none';
    
});
