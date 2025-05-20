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
