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




enviar.addEventListener('click', function() {
    const ciudad = document.getElementById('ciudad').value;
    let lat;
    let lng;
    let zoom = 11;
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
