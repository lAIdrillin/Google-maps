const locations = {
    madrid: [
        { lat:40.45310696447501, lng:-3.6880131863036696, tittle: "Bernabeu"},
        { lat:40.420125098014, lng:-3.688705230915027, tittle: "Puerta de Alcala"},
        { lat:40.491089078668125,   lng: -3.5647155135021222, tittle: "Aeropuerto de Barajas"}
    ],
    paris: [
        { lat:48.85841025645972, lng:2.2944923078862978, tittle: "Torre Eiffel"},
        { lat:48.873896592117916, lng:2.29499966203389, tittle: "Arco del triunfo"},
        { lat:48.85302032202513, lng:2.349873990389982, tittle: "Nottre Dame"}
    ],
    roma: [
        {lat:41.9009841224931, lng:12.48329946954169, tittle: "Fontana de Trevi"},
        {lat:41.89027997948962, lng:12.492212550815092, tittle: "Coliseo"},
        {lat:41.89211998049781, lng:12.486435780698526, tittle: "Foro Romano"}
    ],
        viena: [
        { lat:48.205815044869034, lng: 16.36499488545591, tittle: "Palacio de Hofburg"},
        { lat:48.20851142386625,  lng: 16.374178811573476, tittle: "Catedral de San Esteban"},
        { lat:48.203930242825116,  lng: 16.36221656187421, tittle: "Museo de Historia del Arte"}
    ],
    bucarest:[
        { lat:44.42765667621226,  lng: 26.08749008196995, tittle: "Palacio del Parlamento"},
        { lat:44.42470172513721,  lng: 26.09832592085045, tittle: "Catedral Patriarcal"},
        { lat:44.43942128746843,  lng: 26.09606300531352, tittle: "Museo Nacional de Arte"}
    ],
    tokyo:[
        { lat:35.65871119762234, lng:139.74571185501947, tittle: "Torre de Tokio"},
        { lat:35.67652827040102, lng:  139.69951902385392, tittle: "Santuario Meiji"},
        { lat:35.714742672477264,  lng: 139.79665731727718, tittle: "Templo de la diosa de la misericordia"}
    ],
    berlin:[
        { lat:52.51640511265577, lng: 13.378101076410683,  tittle: "Puerta de Brandenburgo"},
        { lat:52.51916425319998,lng: 13.401418375983647, tittle: "Berliner Dom"},
        { lat:52.51872459043386, lng: 13.376627090221106, tittle: "Reichstag"}
    ]
    
}





const enviar = document.getElementById('enviar');
const formulario = document.getElementById('formulario');
const mapa = document.getElementById('map');


mapa.style.display = '';

function initMap(lat, lng, ciudad, zoom) {
    
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lng },
      zoom: zoom,
    });
    if (locations[ciudad]) {
        locations[ciudad].forEach(loc => {
            new google.maps.Marker({
                position: { lat: loc.lat, lng: loc.lng },
                map: map,
                title: loc.tittle
            });
        });
    }
    mapa.style.display = 'block';
  }

const zoom = {
    madrid: 13,
    paris: 13,
    roma: 13,
    viena: 13,
    bucarest: 13,
    tokyo: 13,
    berlin: 13
};


enviar.addEventListener('click', function() {
    const ciudad = document.getElementById('ciudad').value;
    let lat;
    let lng;
    let zoom = zooms[ciudad];
    if (ciudad === 'madrid'){
        lat = 40.41895303835641
        lng = -3.7173449515944736

    }else if(ciudad === 'paris'){
        lat = 48.85879187839086
        lng = 2.352870623663526

    }else if(ciudad === 'roma'){
        lat = 41.89711601940518
        lng = 12.490647360010009

    }else if (ciudad === 'berlin'){
        lat = 52.51751451642019
        lng = 13.399355245549877

    }else if(ciudad === 'viena'){
        lat = 48.21269348527829
        lng =  16.36794393076543

    }else if(ciudad === 'bucarest'){
        lat = 44.42648279081045
        lng = 26.103890154425134
    }
    else if(ciudad === 'tokyo'){
        lat = 35.6823751757838
        lng = 139.76299719783276
    }
    initMap(lat, lng, ciudad, zoom);

    
});
