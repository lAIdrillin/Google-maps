const localizaciones = {
    madrid: [
        { lat:40.45310696447501, lng:-3.6880131863036696, tittle: "Bernabeu", icono: '⚽'},
        { lat:40.420125098014, lng:-3.688705230915027, tittle: "Puerta de Alcala", icono: '🗿'},
        { lat:40.491089078668125,   lng: -3.5647155135021222, tittle: "Aeropuerto barajas", icono: '✈️'}
    ],
    paris: [
        { lat:48.85841025645972, lng:2.2944923078862978, tittle: "Torre Eiffel", icono: '🗼'},
        { lat:48.873896592117916, lng:2.29499966203389, tittle: "Arco del triunfo", icono: '🗿'},
        { lat:48.85302032202513, lng:2.349873990389982, tittle: "Nottre Dame", icono: '⛪'}
    ],
    roma: [
        {lat:41.9339361898924,  lng:12.454870454553554, tittle: "Estadio Olimpico de Roma", icono: '⚽'},
        {lat:41.89027997948962, lng:12.492212550815092, tittle: "Coliseo", icono: '🗿'},
        {lat:41.89211998049781, lng:12.486435780698526, tittle: "Foro Romano", icono: '🗿'}
    ],
    viena: [
        { lat:48.20720777125714, lng: 16.420759389958327, tittle: "Estadio Ernst Happel", icono: '⚽'},
        { lat:48.20851142386625,  lng: 16.374178811573476, tittle: "Catedral de San Esteban", icono: '⛪'},
        { lat:48.203930242825116,  lng: 16.36221656187421, tittle: "Museo de Historia del Arte", icono: '🗿'}
    ],
    bucarest:[
        { lat:44.43720726529465,  lng: 26.152443435697926, tittle: "Arena Națională", icono: '⚽'},
        { lat:44.42470172513721,  lng: 26.09832592085045, tittle: "Catedral Patriarcal", icono: '⛪'},
        { lat:44.43942128746843,  lng: 26.09606300531352, tittle: "Museo Nacional de Arte", icono: '🗿'}
    ],
    tokyo:[
        { lat:35.65871119762234, lng:139.74571185501947, tittle: "Torre de Tokio", icono: '🗼'},
        { lat:35.67652827040102, lng:  139.69951902385392, tittle: "Santuario Meiji", icono: '🗿'},
        { lat:35.6779826495243,  lng: 139.71453972719834, tittle: "Estadio Nacional Japon", icono: '⚽'}
    ],
    berlin:[
        { lat:52.51640511265577, lng: 13.378101076410683,  tittle: "Puerta de Brandenburgo", icono: '🗿'},
        { lat:52.514710817655924,lng: 13.239516995839624, tittle: "Estadio Olimpico de Berlín", icono: '⚽'},
        { lat:52.51872459043386, lng: 13.376627090221106, tittle: "Reichstag", icono: '⛪'}
    ]
    
}



const enviar = document.getElementById('enviar');
const formulario = document.getElementById('formulario');
const mapa = document.getElementById('map');



function añadirAlMapa(direccion, ciudad, categoria) {
    const geocoder = new google.maps.Geocoder();
    if (ciudad === "") {
        alert("Seleccione una ciudad válida antes de añadir la dirección");
        return;
    }else{
        geocoder.geocode({ address: direccion }, (results, status) => {
            if (status === "OK") {
                const location = results[0].geometry.location;
                const latit = location.lat();
                const lngitud = location.lng();


                localizaciones[ciudad].push({
                    lat: latit,
                    lng: lngitud,
                    tittle: direccion,
                    icono: seleccionIcono(categoria)
                });


                initMap(latit, lngitud, ciudad, 12);
            } else {
                alert("No se pudo encontrar la dirección: " + status);
            }
        });
    }
}

function comprobarDireccion(direccion, categoria){
    if(direccion != ""){
        if(categoria === "") {
            alert("Ingrese una categoria para su Direccion");
            return
        }else{
            añadirAlMapa(direccion, categoria, ciudad);
        }
    }
    
}

function seleccionIcono(categoria){
    switch (categoria.toLowerCase()) {
        case 'deportes': return '⚽';
        case 'cultura': return '🗿';
        case 'monumentos': return '⛪';
        case 'torres': return '🗼';
        case 'viajes': return '✈️';
        case 'otros': return '⚙️'
    }
}




function initMap(lat, lng, ciudad, zoom) {
    
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lng },
      zoom: zoom,
    });
    if (localizaciones[ciudad]) {
        localizaciones[ciudad].forEach(loc => {
            new google.maps.Marker({
                position: { lat: loc.lat, lng: loc.lng },
                map: map,
                title: loc.tittle,
                label: loc.icono,

                    
            });
        });
    }
  }

function comprobarCiudad(ciudad){
    let lat;
    let lng;
    let zoom;
    if (ciudad === 'madrid'){
        lat = 40.41895303835641
        lng = -3.7173449515944736
        zoom = 11;

    }else if(ciudad === 'paris'){
        lat = 48.85879187839086
        lng = 2.352870623663526
        zoom = 12;

    }else if(ciudad === 'roma'){
        lat = 41.89711601940518
        lng = 12.490647360010009
        zoom = 12.5;

    }else if (ciudad === 'berlin'){
        lat = 52.51751451642019
        lng = 13.399355245549877
        zoom = 11; 

    }else if(ciudad === 'viena'){
        lat = 48.21269348527829
        lng =  16.36794393076543
        zoom = 13;

    }else if(ciudad === 'bucarest'){
        lat = 44.42648279081045
        lng = 26.103890154425134
        zoom = 13;
    }
    else if(ciudad === 'tokyo'){
        lat = 35.6823751757838
        lng = 139.76299719783276
        zoom = 12;
    }else if(ciudad === ''){
        return;
    }
    initMap(lat, lng, ciudad, zoom);

    mapa.style.display = 'block';

}


enviar.addEventListener('click', function () {
    const direccionInput = document.getElementById('direccion');
    const direccion = direccionInput.value;
    const ciudad = document.getElementById('ciudad').value;
    const categoria = document.getElementById('categoria').value;

    comprobarCiudad(ciudad);
    comprobarDireccion(direccion, categoria);
    añadirAlMapa(direccion, ciudad, categoria);
});

