# Gestión de Productos con JavaScript, HTML y CSS

Este proyecto muestra cómo gestionar y visualizar productos usando JavaScript moderno, manipulando estructuras de datos como **Object**, **Set** y **Map**, y mostrando los resultados en tablas HTML estilizadas.

## Estructura del proyecto

- **index.html**  
  Página principal que contiene la estructura HTML y los contenedores donde se mostrarán las tablas.

- **gestion_datos.js**  
  Script principal que:
  - Define los productos como un objeto.
  - Convierte los productos a un Set para obtener nombres únicos.
  - Asocia categorías a productos usando un Map.
  - Genera tablas HTML dinámicamente y las inserta en la página.

- **style.css**  
  Archivo de estilos para que las tablas y la página se vean limpias y modernas.

## ¿Qué muestra la aplicación?

1. **Lista de productos (Objeto):**  
   Muestra todos los productos con su id, nombre y precio.

2. **Lista de productos únicos (Set):**  
   Muestra solo los nombres únicos de los productos.

3. **Categoría de productos (Map):**  
   Muestra la relación entre categorías y productos.

## ¿Cómo funciona?

- El archivo JS toma los datos, los transforma según la estructura (Object, Set, Map) y genera tablas HTML usando la función `renderTable`.
- Cada tabla se inserta en su respectivo `<div>` en el HTML.
- El CSS mejora la presentación visual de las tablas y la página.

## ¿Cómo usarlo?

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Verás tres tablas: productos, productos únicos y categorías.

## Vista previa

![Vista previa de las tablas de productos](preview.png) <!-- Puedes agregar una captura de pantalla aquí si lo deseas -->

---

**Autor:**  
Miguel Angel Cuadros Gallego 
2025
