		$(document).ready(function(){
			var velocidade = 500;
			var fadeoutGlobal = ".entradas";
			var fadeinGlobal;

			var botao_stack ="";
			var botao_normal = "#FFD700";
			var botao_clicado = "#8B4513";
			
			startpage(".entrada");

			function startpage(appear){
				fadeinGlobal = appear;
				$(fadeoutGlobal).fadeOut(velocidade);
				$(fadeinGlobal).fadeIn(velocidade);
				fadeoutGlobal = fadeinGlobal;
			}				

			$(".botao_galeria").click(function(){
				$(botao_stack).css({"background-color":botao_normal});
				$(this).css({"background-color":botao_clicado});
				botao_stack = $(this);
			});

			function fadeoutEverything(fadein){
				fadeinGlobal = fadein;
			                   if(fadein != fadeoutGlobal){
					$(fadeoutGlobal).fadeOut(velocidade, function(){
						$(fadeinGlobal).fadeIn(velocidade);
					});

					fadeoutGlobal = fadeinGlobal;
				}
			}
			
			
			$("#botao-entrada").click(function(){
			                fadeoutEverything(".entrada");
			});
			

			$("#botao-combo").click(function(){
			                fadeoutEverything(".combo");
			});

			$("#botao-temaki").click(function(){
		                                   fadeoutEverything(".temaki");
			});

			$("#botao-frito").click(function(){
			                fadeoutEverything(".frito");
		                   });

			$("#botao-hossomaki").click(function(){
			               fadeoutEverything(".hossomaki");	
			});

			$("#botao-uramaki").click(function(){
			               fadeoutEverything(".uramaki");	
			});

			$("#botao-sunomomo").click(function(){
			               fadeoutEverything(".sunomomo");	
			});

			$("#botao-niguiri").click(function(){
			               fadeoutEverything(".niguiri");	
			});

			$("#botao-sashimi").click(function(){
			               fadeoutEverything(".sashimi");	
			});


			$("#botao-sushiespecial").click(function(){
			               fadeoutEverything(".sushiespecial");	
			});
			
		});