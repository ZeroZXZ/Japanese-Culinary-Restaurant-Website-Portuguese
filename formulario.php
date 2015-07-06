<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/documento_form.css">
	<?php
		$nome = $email = $assunto = $descricao = $sexo = " ";
		$nomeErr = $emailErr = $assuntoErr = $descricaoErr = $sexoErr = " ";
		$global = $globalErr = " ";

		filtrarDados();

		function filtrarDados(){
			if($_SERVER["REQUEST_METHOD"] == "POST"){
				$bll = true;
		
				$GLOBALS["nome"] = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_STRING);
				$GLOBALS["assunto"] = filter_input(INPUT_POST, "assunto", FILTER_SANITIZE_STRING);
				$GLOBALS["sexo"] = filter_input(INPUT_POST, "sexo", FILTER_SANITIZE_STRING);
				$GLOBALS["descricao"] = filter_input(INPUT_POST, "descricao", FILTER_SANITIZE_STRING);
				$GLOBALS["email"] = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
				
				if(filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL)){
					if(empty($GLOBALS["email"])){
						$GLOBALS["emailErr"] = "Campo vazio!";
						$bll=false;
					}
				}
				else{
					$GLOBALS["emailErr"] = "Email Inválido!";
					$bll=false;
				}

				if(empty($GLOBALS["nome"])){
					$GLOBALS["nomeErr"] = "Campo vazio!";
					$bll=false;
				}

				if(empty($GLOBALS["assunto"])){
					$GLOBALS["assuntoErr"] = "Campo vazio!";
					$bll=false;
				}

				if(empty($GLOBALS["descricao"])){
					$GLOBALS["descricaoErr"] = "Campo vazio!";
					$bll=false;
				}

				if(empty($GLOBALS["sexo"])){
					$GLOBALS["sexoErr"] = "Campo vazio!";
					$bll=false;
				}

				if($bll==TRUE){
				/* $stringDescricao = "Qual o valor dos sushis?" . "\nEnviado por: sebastiao\n" . "email: email@gmail.com\n" . "Sexo: masculino"; */
					$stringDescricao = $GLOBALS["descricao"];
					$stringDescricao .= "\n\nEnviador por:";
					$stringDescricao .= $GLOBALS["nome"];
					$stringDescricao .= "\nEmail: ";
					$stringDescricao .= $GLOBALS["email"];
					$stringDescricao .= "\nSexo:";
					$stringDescricao .= $GLOBALS["sexo"];
					mail("restaurante_sushi_genesis@sushigenesis.netau.net", $GLOBALS["assunto"], $stringDescricao);
					mail("restaurante_sushi_genesis1@sushigenesis.netau.net", $GLOBALS["assunto"], $stringDescricao);
					mail("restaurante_sushi_genesis2@sushigenesis.netau.net", $GLOBALS["assunto"], $stringDescricao);
					$GLOBALS["global"] = "Envio completo!";
				}
				else
					$GLOBALS["globalErr"] = "Envio não pôde ser concluído!";
			}
		}
	?>
</head>
<body style="background-color:transparent">
	<form method="POST" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>' >
			<p class="texto">Nome: <input type="text" name="nome"> <?php echo "$nomeErr"; ?> </p>
			<p class="texto">Email: <input type="text" name="email"> <?php echo "$emailErr"; ?> </p>
			<p class="texto">Assunto: <input type="text" name="assunto"> <?php echo "$assuntoErr"; ?> </p>
			<p class="texto">Sexo: <input type="radio" name="sexo" value="masculino" checked> Masculino <input type="radio" name="sexo" value="feminino"> Feminino </p>
			<textarea name="descricao" cols="60" rows="20"></textarea><?php echo "$descricaoErr"; ?></p>
			<br>
			<input type="submit" name="submit" value="OK"> <span class="texto"> <?php echo "$global"; ?> <?php echo "$globalErr"; ?> </span>
	</form>
</body>
</html>