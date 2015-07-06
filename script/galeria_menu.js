		$(document).ready(function(){	
			var animating = false;
			var max_left = -600;
			var max_right = 0;
			var actual_distance = 0;

			function codigo_simples(classe, caminho_imagem){
				if( $(classe).attr("src") != caminho_imagem ){
					$(classe).fadeOut("fast", function(){
						$(classe).attr({"src": caminho_imagem});
						$(classe).fadeIn("fast");
					});
				}
			}

			function mudar_seta(){
				/* para que esta função funcione o caminho/diretorio das imagens não deve mudar, e nem o nome do ID */
				var seta_direita = "#leftClick_galeria";
				var seta_esquerda = "#rightClick_galeria";

				if(actual_distance >= max_left){
					codigo_simples(seta_direita, "imagens/originais/right_arrow2.png");
				}
				else{
					codigo_simples(seta_direita, "imagens/originais/right_arrow2_grey.png");
				}

				if(actual_distance >= max_right){
					codigo_simples(seta_esquerda, "imagens/originais/left_arrow2_grey.png");
				}
				else{
					codigo_simples(seta_esquerda, "imagens/originais/left_arrow2.png");
				}

			}

			$("#leftClick_galeria").click(function(){
				if(animating==false && actual_distance > max_left){
					animating = true;
					$(".slider_galeria a").animate({left:'-=130px'}, "slow", function(){
						animating = false;
					});
					actual_distance -=130;
				}
				mudar_seta();
			});

			$("#rightClick_galeria").click(function(){
				if(animating==false && actual_distance < max_right){
					animating = true;
					$(".slider_galeria a").animate({left:'+=130px'}, "slow", function(){
						animating = false;
					});
					actual_distance +=130;
				}
				mudar_seta();
			});


		});