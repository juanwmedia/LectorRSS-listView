// Obtenemos los elementos de la colección
var noticias = Alloy.Collections.noticia;

// Control del widget "pull to refresh": https://github.com/FokkeZB/nl.fokkezb.pullToRefresh
function refrescarRss(e) {
    noticias.fetch({
        success: e.hide,
        error: e.hide
    });
}
$.ptr.refresh();

// Mostrar el detalle de una noticia
function mostrarDetalle(noticia) { 
	
	// Instanciamos el controlador que gestiona el detalle de cada noticia
	// le pasamos como parámetro el modelo (la noticia) de la colección
	// que queremos ver en detalle
	var controlador = Alloy.createController('detalle', {
		modelo : noticias.get(noticia.itemId)
	});
	
	// También obtenemos la vista, para luego abrirla
	var vista = controlador.getView();

	$.index.openWindow(vista);
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