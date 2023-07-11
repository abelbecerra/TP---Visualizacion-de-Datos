// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Ejemplo de código JavaScript para agregar interactividad

// Obtener referencias a los elementos HTML
var column1 = document.querySelector('.column:nth-child(1)');
var column2 = document.querySelector('.column:nth-child(2)');

// Agregar evento click a la columna 1
column1.addEventListener('click', function() {
  column1.style.backgroundColor = '#f2f2f2';
});

// Agregar evento hover a la columna 2
column2.addEventListener('mouseover', function() {
  column2.style.transform = 'scale(1.05)';
});

column2.addEventListener('mouseout', function() {
  column2.style.transform = 'scale(1)';
});