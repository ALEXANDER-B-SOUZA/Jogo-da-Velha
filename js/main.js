/* pegando caracter escolhido pelo cliente e guardando
 na variável jogador1 e inserindo o outro caracter na variável
 jogador2*/

 function clickTeclado(letra){   

    if(letra === "X"){
        
        var jogador1 = "x";
        var jogador2 = "O";
    } else {
        var jogador1 = "O";
        var jogador2 = "X"; 
        }    
                 
var contador = 0;
while (contador <= 9){
    
    if(contador/2 != 0){
        var atual = jogador1;
    } else{
        var atual = jogador2;
    }
    document.getElementById("jogadorAtual").innerHTML = "É a vez do "+ atual;
    contador++;
}
}
             
     