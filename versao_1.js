/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
  alert ("Bem vindo ao jogo de BlackJack") 
 if(confirm("Deseja iniciar uma nova rodada? ")){
   function comprarCarta() {
      
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      const naipes = ["♦️", "♥️", "♣️", "♠️"]
      const numero = cartas[Math.floor(Math.random() * 13)]
      const naipe = naipes[Math.floor(Math.random() * 4)]
    
      let valor
      if (numero === "A") {
         valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
         valor = 10
      } else {
         valor = Number(numero)
      }
    
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
    
      return carta
    }
    let usuario = [];
    let computador = [];
  
    for (let i = 0; i < 2; i++) {
      usuario.push(comprarCarta());
      computador.push(comprarCarta());
    }
  
    let pontosUsuario = usuario[0].valor + usuario[1].valor;
    let pontosComputador = computador[0].valor + computador[1].valor;
  
    console.log("Usuário - cartas:", usuario[0].texto, usuario[1].texto, ":" , pontosUsuario);
    console.log("Computador - cartas:", computador[0].texto, computador[1].texto, ":", pontosComputador);
  
    if (pontosUsuario > 21) {
      console.log("O usuário estourou! O computador ganhou!");
    } else if (pontosComputador > 21) {
      console.log("O computador estourou! O usuário ganhou!");
    } else if (pontosUsuario > pontosComputador) {
      console.log("O usuário ganhou!");
    } else if (pontosComputador > pontosUsuario) {
      console.log("O computador ganhou!");
    } else {
      console.log("Empate!");
    }
  } else { 
    alert("Fim de jogo");
 }
   
