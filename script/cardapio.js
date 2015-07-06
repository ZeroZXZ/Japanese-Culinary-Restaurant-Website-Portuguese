		$(document).ready(function(){
			var mudando_pagina = false; 
			var stackPageFadeout = ".menu-cardapio1"; //primeira página do cardapio
			var stackPageFadein = ".menu-cardapio2";//segunda página do cardapio

			var max_paginas = 2;
			var min_paginas = 1;
			var pagina_atual = 1;

			function codigo_simples2(classe, caminho_imagem){
				if( $(classe).attr("src") != caminho_imagem ){
					$(classe).attr({"src":caminho_imagem});
				}
			}

			function mudar_seta2(){
					if(pagina_atual >= max_paginas){
						codigo_simples2(".seta_direita_c", "imagens/originais/right_arrow2_grey.png");
					}
					else{
						codigo_simples2(".seta_direita_c", "imagens/originais/right_arrow2.png");
					}

					if(pagina_atual <= min_paginas){
						codigo_simples2(".seta_esquerda_c", "imagens/originais/left_arrow2_grey.png");
					}
					else{
						codigo_simples2(".seta_esquerda_c", "imagens/originais/left_arrow2.png");
					}
			}
	
			$(".slideCardapio").click(function(){
				$(this).next().slideToggle("slow");
				if( $(this).parent().next().children(".sinalCardapio").text() == "-" )
					$(this).parent().next().children(".sinalCardapio").text("+");
				else
					$(this).parent().next().children(".sinalCardapio").text("-");
			});

			$(".sinalCardapio").click(function(){
				$(this).parent().prev().children().next().slideToggle("slow");

				if( $(this).text() == "+" )
					$(this).text("-");
				else
					$(this).text("+");
			});

			$(".paginaCardapio").click(function(){
				if(!mudando_pagina){
					mudando_pagina=true;
					$(stackPageFadeout).fadeOut("slow", function(){
						$(stackPageFadein).fadeIn("slow");
						if( $(".paginaCardapio").text() == "Página 1" ){
							$(".paginaCardapio").text("Página 2");
							stackPageFadeout = ".menu-cardapio2";
							stackPageFadein = ".menu-cardapio1";
							pagina_atual=2;
							mudar_seta2();
						}
						else{
							$(".paginaCardapio").text("Página 1");
							stackPageFadeout = ".menu-cardapio1";
							stackPageFadein = ".menu-cardapio2";
							pagina_atual=1;
							mudar_seta2();
						}
						mudando_pagina=false;
					});
				}
			});

			$(".seta_direita_c").click(function(){
				if(!mudando_pagina){
					mudando_pagina=true;
					$(".menu-cardapio1").fadeOut("slow", function(){
						$(".menu-cardapio2").fadeIn("slow");
						$(".paginaCardapio").text("Página 2");
						stackPageFadein = ".menu-cardapio1";
						stackPageFadeout = ".menu-cardapio2";
						mudando_pagina=false;
						pagina_atual=2;
						mudar_seta2();
					});
				}
			});

			$(".seta_esquerda_c").click(function(){
				if(!mudando_pagina){
					mudando_pagina=true;
					$(".menu-cardapio2").fadeOut("slow", function(){
						$(".menu-cardapio1").fadeIn("slow");
						$(".paginaCardapio").text("Página 1");
						stackPageFadein = ".menu-cardapio2";
						stackPageFadeout = ".menu-cardapio1";
						mudando_pagina=false;
						pagina_atual=1;
						mudar_seta2();
					});
				}
			});
		});