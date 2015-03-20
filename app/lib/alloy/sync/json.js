// Sync adapter personalizado para usar JSON
function Sync(metodo, modelo, opciones) {
	
	// Solo funcionará para peticiones fetch
	// http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Sync_Adapters_and_Migrations
	if (metodo !== 'read') {
		throw 'Este adaptador es para lectura.';

	} else {

		if (!Ti.Network.online) {
			alert('Debes disponer de conectividad a internet para usar la App.');
			return;
		}
		
		// Creamos el request HTTP
		var xhr = Ti.Network.createHTTPClient({

			onload : function() {

				try {
					var noticias = JSON.parse(this.responseText); // Pareamos en JSON el response

					modelo.length = noticias.length;

					opciones.success((modelo.length === 1) ? noticias[0] : noticias, this.responseText);
					

				} catch (e) {
					opciones.error(modelo, this.responseText);
				}

			},

			onerror : function(e) {
				opciones.error(modelo, this.responseText);
			}
		});

		xhr.open('GET', Alloy.Globals.urlFeedRss);
		xhr.send();
	}
}

// Imprescindible añadir al objeto exports nuestra función Sync
exports.sync = Sync; 