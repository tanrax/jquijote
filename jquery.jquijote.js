(function($) {
	var iPosPala = 0;
	function cambiarPrimeraMayus(string){ 
		return string.charAt(0).toUpperCase() + string.slice(1); 
	} 
	var generarTexto = function(inaPal, iniCant) {
		var sFin = '';
		var iPosPalaTem = iPosPala;
		for (var i = iPosPalaTem; i < (iniCant + iPosPalaTem); i++) {
			sFin += inaPal[i] + ' ';
			iPosPala++;
		};
		sFin = $.trim(sFin);
		//Quita una coma al final
		if(sFin.substr(-1, 1) == ',') sFin = sFin.substring(0, sFin.length - 1);
		//Añade un punto al final si no existe
		if(sFin.substr(-1, 1) != '.') sFin += '.';
		//Pone la primera letra en mayuscula
		sFin = cambiarPrimeraMayus(sFin);

		return sFin;
	}
	$.fn.extend({ 
	    jquijote : function(inJson) { 
	    	var aConf = inJson;
			$.getJSON('text.json', function(inJson) {
				var sTemp = inJson[0];
				//Array con texto del quijote
				var aTexto = sTemp.split(' ');
		    	//Imprime textos
			    for(var sPos in aConf) {
			    	$(sPos).each(function(index, el) {
			    		$(this).text(generarTexto(aTexto, aConf[sPos]));
			    	});
			    }
			});
	    }
	});
})(jQuery);