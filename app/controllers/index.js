// Obtenemos los elementos de la colección
var noticias = Alloy.Collections.noticia;
noticias.fetch(); // -> read

// Mostrar el detalle de una noticia
function mostrarDetalle() {

}

// Transformar los datos de cada modelo en la colección on objetos JSON
function transformarNoticias(modelo) {
	var transformado = modelo.toJSON();

	// Eliminar tags HTML
	transformado.content = transformado.content.replace(/(<([^>]+)>)/ig, '');

	return transformado;
}

// Abrimos la vista principal
$.index.open();