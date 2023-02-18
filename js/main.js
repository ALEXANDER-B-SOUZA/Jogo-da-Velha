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
   /*criando repetição de jogadas, começando com o jogador1*/              
var contador = 1;

while (contador <= 9){    
    if(contador % 2 == 0){
        var atual = jogador2;
    } else{
        var atual = jogador1;    
    document.getElementById("jogadorAtual").innerHTML = "É a vez do "+ atual;
    contador++;
}
    /* Criando marcação com as escolhas dos jogadores.*/
    function exibir() {
      var escolha = document.getElementById("jogo").children.getElmentsByClassName("selecao").innerHTML = atual;
        
/*Criando repositório de marcação para comparar vencedor*/
   var playX = [item1, item2, item3, item4, item5];
   var playO = [ item1, item2, item3, item4, item5]

   if(atual ==="x"){
    playX = escolha;
   } else{
    playO = escolha;
}
     
/*verificando o vencedor*/
if(playX == 1,2,3 || 4,5,6 || 7,8,9 || 1,4,7 || 2,5,8 || 3,6,9 || 1,5,9 || 3,5,7){
    alert("O jogador X é o vencedor!");
} else if (playO == 1,2,3 || 4,5,6 || 7,8,9 || 1,4,7 || 2,5,8 || 3,6,9 || 1,5,9 || 3,5,7){
    alert("O jogador O é o vencedor!");
}
 }
 }
} 
 
        
  
