		$(document).ready(function(){	
			var animating = false;
			
			function return_max_left(classe_nome){
				var max_left;

				if(classe_nome.search("entrada") != -1 )
					max_left=-850;
				if(classe_nome.search("combo") != -1)
					max_left=-1100;
				if(classe_nome.search("temaki") != -1)
					max_left=-1100;
				if(classe_nome.search("frito") != -1)
					max_left=-1100;
				if(classe_nome.search("hossomaki") != -1)
					max_left=-1500;
				if(classe_nome.search("uramaki") != -1)
					max_left=-1400;
				if(classe_nome.search("niguiri") != -1)
					max_left=-750;
				if(classe_nome.search("sunomomo") != -1)
					max_left=-750;
				if(classe_nome.search("sashimi") != -1)
					max_left=-2350;
				if(classe_nome.search("sushiespecial") != -1)
					max_left=-450;

				return max_left;
			}

			function codigo_simples(classe, caminho_imagem){
				if( classe.attr("src") != caminho_imagem ){
					classe.fadeOut("fast", function(){
						classe.attr({"src": caminho_imagem});
						classe.fadeIn("fast");
					});
				}
			}

			
			function mudar_seta(isto_aqui){
				/* para que esta função funcione o caminho/diretorio das imagens não deve mudar, e nem o nome da classe */
				var parente = isto_aqui.parent().parent();
				var seta_direita = parente.children(".seta_direita").children();
				var seta_esquerda = parente.children(".seta_esquerda").children();
				var estas_imagens = parente.children(".sliderBase").children(".slider").children(".interno").children("a").children("img");
				var distancia_atual;
				var max_left = return_max_left(parente.parent().attr("class")); var max_right=0;

				if(estas_imagens.css("left") == "auto")
					estas_imagens.css({"left":"0"});

				distancia_atual = parseFloat(estas_imagens.css("left") );
	
				if(distancia_atual >= max_left ){
					codigo_simples(seta_direita, "imagens/originais/right_arrow2.png");
				}
				else{
					codigo_simples(seta_direita, "imagens/originais/right_arrow2_grey.png");
				}

				if(distancia_atual >= max_right ){
					codigo_simples(seta_esquerda, "imagens/originais/left_arrow2_grey.png");
				}
				else{
					codigo_simples(seta_esquerda, "imagens/originais/left_arrow2.png");
				}

			}

			$(".leftClick").click(function(){
				var estas_imagens = $(this).parent().parent().children(".sliderBase").children(".slider").children(".interno").children("a").children("img");
				var distancia_atual; var isto_aqui = $(this);
				var max_left = return_max_left( isto_aqui.parent().parent().parent().attr("class") );

				if(estas_imagens.css("left") == "auto")
					estas_imagens.css({"left":"0"});
				
				distancia_atual = parseFloat(estas_imagens.css("left") );

				if(animating==false && distancia_atual > max_left ){
					animating = true;
					estas_imagens.animate({left:'-=130px'}, "slow", function(){
						animating = false;
						mudar_seta( isto_aqui );
					});
				}
			});

			$(".rightClick").click(function(){
				var estas_imagens = $(this).parent().parent().children(".sliderBase").children(".slider").children(".interno").children("a").children("img");
				var distancia_atual;	var isto_aqui = $(this);
				var max_right=0;

				if(estas_imagens.css("left") == "auto")
					estas_imagens.css({"left":"0"});
				
				distancia_atual = parseFloat(estas_imagens.css("left") );

				if(animating==false && distancia_atual < 0 ){
					animating = true;
					estas_imagens.animate({left:'+=130px'}, "slow", function(){
						animating = false;
						mudar_seta( isto_aqui );
					});
				}
			});

			$(".imgClick").click(function(){
				var srcimage = $(this).attr("src");

				var imagem_centro = $(this).parent().parent().parent().parent().parent().parent().children(".imagem_centro_id");
				imagem_centro = imagem_centro.children();

				/* alert(imagem_centro.attr("src")); */

				if( imagem_centro.attr("src") != srcimage ){
					imagem_centro.fadeOut("slow", function(){
						imagem_centro.attr("src", srcimage);
						imagem_centro.fadeIn("slow");
				     	});
				}
			});

		});