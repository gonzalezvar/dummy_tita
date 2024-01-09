# dummy_tita

## Descripción

Esta es una prueba de aplicación web desarrollada con React y Redux Toolkit, siguiendo la metodología de diseño atómico.

## Estructura del Proyecto

El proyecto se divide en varias carpetas principales:

- `src/components`: Contiene los componentes de React, organizados según la metodología de diseño atómico (átomos, moléculas, organismos).
- `src/store`: Contiene la configuración de Redux Toolkit y los slices de la aplicación.
- `src/services`: Contiene los servicios utilizados en la aplicación, como la API y la configuración de Firebase.
- `src/router`: Contiene la configuración del enrutador de la aplicación.

## Diseño Atómico

El diseño atómico divide los componentes en tres niveles:

- Átomos: Son los componentes más básicos como botones, imágenes, entradas de texto, etc.
- Moléculas: Son grupos de átomos que funcionan juntos como una unidad. Por ejemplo, un formulario de búsqueda podría consistir en un átomo de entrada de texto y un átomo de botón.
- Organismos: Son grupos de moléculas y/o átomos que forman una sección distinta de una interfaz.

## Redux Toolkit

Redux Toolkit se utiliza para manejar el estado global de la aplicación. Cada slice en `src/store` representa una pieza del estado global.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

npm install

## Ejecutar

Para ejecutar el proyecto utiliza:
npm run start