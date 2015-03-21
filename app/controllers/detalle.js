var args = arguments[0] || {};

// El modelo recibido como parámetro es la representación de la noticia
// individual que queremos ver en detalle
var modelo = args.modelo;

// Cambio el atributo titule de la ventana de esta vista por el título de la noticia
$.detalle.title = modelo.get('title');

// Creamos un estilo base para añadir HTML inline a la webView
var estilo = '<style>body { font-family: sans-serif; } img { width: 45%; float: left; margin-right: 2%; }</style>';

// Obtenemos el contenido en si de esta noticia (modelo)
var contenido = modelo.get('content');

var imagen = modelo.get('thumbnail');

// Alloy usa Backbone.js, este tiene como dependencia Underscore.js -> http://underscorejs.org/#template
var plantillaHtml = _.template('<!DOCTYPE HTML><html lang="en-US"><head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><meta charset="UTF-8"><title></title><%= estilo %></head><body><img src="<%= imagen %>" /><%= contenido %></body></html>');

// Placeholders definidos
$.vistaWeb.html = plantillaHtml({estilo:estilo, imagen: imagen,  contenido:contenido});