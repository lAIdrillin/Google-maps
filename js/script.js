const enviar = document.getElementById('enviar');
const formulario = document.getElementById('formulario');
const mapa = document.getElementById('map');

formulario.style.display = 'block';

function initMap(lat, lng) {
    
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lng },
      zoom: 6,
    });
    mapa.style.display = 'block';
  }




enviar.addEventListener('click', function() {
    const ciudad = document.getElementById('ciudad').value;
    let lat;
    let lng;
    if (ciudad === 'madrid'){
        lat = 40.41895303835641
        lng = -3.7173449515944736

    }else if(ciudad === 'paris'){
        lat = 48.85879187839086
        lng = 2.352870623663526

    }else if(ciudad === 'roma'){
        lat = 41.89711601940518
        lng = 12.490647360010009

    }else if (ciudad === 'sarajevo'){
        lat = 43.85627799383089
        lng =  8.41245180743923

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
    initMap(lat, lng);
    formulario.style.display = 'none';
    
});
