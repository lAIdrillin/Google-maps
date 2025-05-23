let localizaciones = JSON.parse(localStorage.getItem('localizaciones')) || {
    madrid: [
        { lat:'', lng:'', tittle: '', icono:''}
    ],
    paris: [
        { lat:'', lng:'', tittle: '', icono:''}
    ],
    roma: [
         { lat:'', lng:'', tittle: '', icono:''}
    ],
    viena: [
        { lat:'', lng:'', tittle: '', icono:''}
    ],
    bucarest:[
       { lat:'', lng:'', tittle: '', icono:''}
    ],
    tokyo:[
        { lat:'', lng:'', tittle: '', icono:''}
    ],
    berlin:[
        { lat:'', lng:'', tittle: '', icono:''}
    ]
    
}

const enviar = document.getElementById('enviar');
const formulario = document.getElementById('formulario');
const mapa = document.getElementById('map');
const borrar = document.getElementById('borrar');
const url = 'https://www.ign.es/ign/RssTools/sismologia.xml';
let terremotos = [];
const urlvolcanes = 'https://volcano.si.edu/news/WeeklyVolcanoCAP.xml?'


function guardarEnLocalStorage() {
  localStorage.setItem('localizaciones', JSON.stringify(localizaciones));
}

function añadirAlMapa(direccion, ciudad, categoria) {
    const geocoder = new google.maps.Geocoder();
    if (ciudad === "") {
        alert("Seleccione una ciudad válida antes de añadir la dirección");
        return;
    }else{
        geocoder.geocode({ address: direccion +", " + ciudad }, (results, status) => {
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
                guardarEnLocalStorage();

                initMap(latit, lngitud, ciudad, 12);
            } 
        });
    }
}


//Selecciona un icono segun la categoria elegida por el usuario
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

//Muestra el mapa con los parametros recibidos
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

  //Comprueba la ciudad ingresada o si esta vacia
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

//extrae los datos de el xml 
async function obtenerDatosXML() {
  try {
    const respuesta = await fetch(url); //hace una petición HTTP a la URL del feed de sismología.
    const textoXML = await respuesta.text(); // lee la respuesta como texto plano.

    const parser = new DOMParser(); //convierte la cadena de texto en un árbol DOM.
    const xmlDoc = parser.parseFromString(textoXML, "application/xml"); //es ahora un objeto que podemos navegar con métodos DOM.

    const items = xmlDoc.querySelectorAll("item");  //Cada <item> en el feed representa un terremoto o evento sísmico.

    terremotos = []; 
    items.forEach(item => {
      const titulo = item.querySelector("title")?.textContent || "Sin título";
      const lat = parseFloat(item.getElementsByTagNameNS("*", "lat")[0]?.textContent);
      const lon = parseFloat(item.getElementsByTagNameNS("*", "long")[0]?.textContent);
      const descripcion = item.querySelector("description")?.textContent || "";

      const match = descripcion.match(/magnitud\s(\d+(\.\d+)?)/i);
      const magnitud = match ? parseFloat(match[1]) : null;

      let icono = "🟢";
      if (magnitud !== null) {
        if (magnitud >= 2 && magnitud < 3) {
          icono = "🟢";
        
        } else if (magnitud >= 3 && magnitud < 3.5) {
            icono = "🟡";
        
        } else if (magnitud > 3.5) {
          icono = "⚫";
        } else {
          icono = "🌋";
        }
      }

      if (!isNaN(lat) && !isNaN(lon)) {
        terremotos.push({
          lat: lat,
          lng: lon,
          tittle: titulo,
          icono: icono
        });
      }
    });

  } catch (error) {
    console.error("Error al obtener o procesar el XML:", error);
  }
}

async function comprobarEvento(evento) {
    if(evento === "terremotos"){
        await obtenerDatosXML();

        let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 40.0, lng: -3.7 },
            zoom: 5,
        });
        terremotos.forEach(loc => {
            new google.maps.Marker({
                position: { lat: loc.lat, lng: loc.lng },
                map: map,
                title: loc.tittle,
                label: loc.icono,
            });
        });
        mapa.style.display = 'block';
        let leyenda = document.getElementById('leyenda');
        leyenda.style.display = 'block';

    }else if(evento === "volcanes"){
        
    }
    document.getElementById('categoria').value = "";
        document.getElementById('direccion').value = "";
        document.getElementById('evento').value = "";
        return;
}




enviar.addEventListener('click', async function () {
    leyenda.style.display = 'none';
    const direccionInput = document.getElementById('direccion');
    const direccion = direccionInput.value;
    const ciudad = document.getElementById('ciudad').value;
    const categoria = document.getElementById('categoria').value;
    const evento = document.getElementById('evento').value
    if(evento != "") {
        comprobarEvento(evento);
    }else{

        if (!categoria && direccion) {
        alert("Ingrese una categoría para su Dirección");
        return;
        }

        if (categoria && !direccion){
        alert("Ingrese una direccion para su Dirección");
        return;
        }

        if(categoria && direccion){
        añadirAlMapa(direccion, ciudad, categoria);
        }


        comprobarCiudad(ciudad);

    }
    document.getElementById('categoria').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('evento').value = "";

});

borrar.addEventListener('click', function () {

    for (let ciudad in localizaciones) {
        localizaciones[ciudad] = [];
    }

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.85879187839086, lng: 2.352870623663526 },
        zoom: 4
    });
    
});

