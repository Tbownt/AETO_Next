# Prueba Técnica AETO

## Instalación del Proyecto

Para instalar el proyecto, es necesario clonar el repositorio y luego ejecutar los siguientes comandos:

```bash
npm install

# o

yarn install
```

Después de instalar los paquetes necesarios, ejecutamos:

```bash
npm run dev

# o 

yarn dev
```

Los resultados de este proyecto deberían estar disponibles en: [http://localhost:3000](http://localhost:3000).

## Decisiones Técnicas para este Proyecto

### Tecnologías utilizadas:
- **Next.js** como framework principal.  
- **TailwindCSS** para el estilado de la página.  
- **Redux Toolkit** para el manejo de estado.  
- **Chart.js** para el gráfico en tiempo real.  
- **Jest** para las pruebas unitarias.  

Esta aplicación tiene como objetivo evaluar los conocimientos técnicos requeridos para el puesto de Desarrollador Frontend.  
El desafío consistía en crear una aplicación que obtuviera datos de la API de TMDB, aplicando el patrón de diseño **Observer**, que es manejado por defecto con Redux Toolkit. Además, se debía implementar una funcionalidad de **debouncing** para las peticiones en tiempo real, así como la capacidad de filtrar los resultados obtenidos de la API y paginarlos. Todos estos requisitos fueron implementados correctamente y están operativos en la aplicación.

## Funcionamiento de la Aplicación

La aplicación es una SPA en la que, al cargar, se observa un gráfico vacío y una barra de búsqueda en la parte superior derecha, acompañada de un botón con un ícono de filtrado.  

- Al escribir cualquier carácter en la barra de búsqueda, pasados **0.5 segundos**, la aplicación traerá todos los datos correspondientes a la consulta realizada por el usuario.
- El filtrado se aplica de forma **local**, por lo que afectará únicamente los resultados visibles en la página actual. 
- Si el usuario navega a la siguiente página y aplica los filtros, estos se aplicarán a los datos mostrados en ese momento.

## Mejoras Futuras

- Implementar un filtrado múltiple que permita al usuario seleccionar más de un género de película simultáneamente.
- Agregar una página de detalles para cada película, utilizando un **ID** como parámetro para extraer y mostrar información detallada sobre la misma.



