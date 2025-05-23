# Google-maps

## Sesión 2: Personalizar el mapa (20/05/2025)

### Resumen
En la sesion de hoy nos hemos encargado de hacer el formulario que incluye 7 ciudades para que escoja el usuario,añaadimos el mapa en el que sale la ciudad en funcion de la que haya escogido previamente y con un zoom especifico para cada ciudad tambien añadimos un array en la que diferentes localizaciones en funcion de la ciudad y para terminar pusimos iconos en funcion del tipo/categoria de la localizcion.

### Dificultades Encontradas
1. **Problema**:la funcion para agregar una nueva direccion introducida por el usuario

### Soluciones Aplicadas
1. **Solución**:declaracion de una variable especifica para google maps

### Fuentes Consultadas
- W3schools
- Chat GPT
- Compañeros de clase


**Decisiones tecnicas**:
- Localizaciones dentro de cada ciudad
- Diseño de la pagina 
- Ciudades escogidas

**Ideas de mejora futura**:
- Mejorar iconos del mapa

## Sesión 3: Personalizar el mapa (21/05/2025)

### Resumen
En la sesion de hoy nos hemos encargado de crear un input para introducir una direccion personalizada además de un desplegable para poder seleccionar la categoría de dicha dirección

### Dificultades Encontradas


### Soluciones Aplicadas


### Fuentes Consultadas
- W3schools
- Chat GPT
- Compañeros de clase


**Decisiones tecnicas**:

- Logica para mostrar las ubicaciones correctas en la propia ciudad


**Ideas de mejora futura**:
- Mejorar iconos del mapa

## Sesión 4: Obtener posiciones de forma dinámica (22/05/2025) y (23/05/2025)

### Resumen
En el dia de hoy hemos implementado un desplegable dentro del formulario para mostrar eventos geograficos, hasta ahora terremotos y maremotos loss cuales extrae la informacion de 'https://www.ign.es/ign/RssTools/sismologia.xml' y lo mustra en el mapa con una respectiva leyenda que indica el icono de cada terremoto segun su magnitud, tambien implementamos que al pasar el raton por encima de cada marcador te aparezca fecha, hora y magnitud exacta de cuando ha ocurrido dicho evento. Tambien hemos añadido una leyenda para los marcadores de las hubicaciones introducidas por el usuario
### Dificultades Encontradas
1. **Problema**: Como extraer datos exactos de el xml actualizable 

### Soluciones Aplicadas
1. **Solución**: Usar el geocoder de googleMaps

### Fuentes Consultadas
- https://www.ign.es/ign/RssTools/sismologia.xml
- W3schools
- Chat GPT
- Compañeros de clase
**Decisiones tecnicas**:
- como formar las leyendas y categorizar los eventos 
**Ideas de mejora futura**:
- Implementacion de futuros eventos como tormentas, volcanes... a poder ser extrallendo la       informacion de paginas donde dicha informacion se actualice automaticamente