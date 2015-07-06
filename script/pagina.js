		$(document).ready(function(){
			var velocidade = 500;
			var fadeoutGlobal = ".inicio";
			var fadeinGlobal;

			var botao_stack ="";
			var botao_normal = "#FFD700";
			var botao_clicado = "#8B4513";
			
			startpage(".inicio");

			function startpage(appear){
				fadeinGlobal = appear;
				$(fadeoutGlobal).fadeOut(velocidade);
				$(fadeinGlobal).fadeIn(velocidade);
				fadeoutGlobal = fadeinGlobal;
			}				
		
			/*
			$(".botao").click(function(){
				$(botao_stack).css({"background-color":botao_normal});
				$(this).css({"background-color":botao_clicado});
				botao_stack = $(this);
			});
			*/

			$(".botao").click(function(){
			
				$(botao_stack).css({"background":"-webkit-linear-gradient(#FFD700, #FFE766)"});
				$(botao_stack).css({"background":"-o-linear-gradient(#FFD700, #FFE766)"});
				$(botao_stack).css({"background":"-moz-linear-gradient(#FFD700, #FFE766)"});
				$(botao_stack).css({"background":"linear-gradient(#FFD700, #FFE766)"});

				$(this).css({"background":"-webkit-linear-gradient(#8B4513, #97582B)"});
				$(this).css({"background":"-o-linear-gradient(#8B4513, #97582B)"});
				$(this).css({"background":"-moz-linear-gradient(#8B4513, #97582B)"});
				$(this).css({"background":"linear-gradient(#8B4513, #97582B)"});

				botao_stack=$(this);
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
			
			
			$("#botao-inicio").click(function(){
			                fadeoutEverything(".inicio");
			});
			

			$("#botao-cardapio").click(function(){
			                fadeoutEverything(".menu-cardapio");
			});

			$("#botao-contato").click(function(){
		                                   fadeoutEverything(".contato");
			});

			$("#botao-galeria").click(function(){
			                fadeoutEverything(".galeria");
		                   });

			$("#botao-localizacao").click(function(){
			               fadeoutEverything(".localizacao");	
			});

			
		});
