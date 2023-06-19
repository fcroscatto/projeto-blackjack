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

    

if (confirm("Bem-vinde ao jogo de BlackJack!\nDeseja iniciar uma nova rodada?")) {
  function comprarCarta() {
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const naipes = ["♦️", "♥️", "♣️", "♠️"];
    const numero = cartas[Math.floor(Math.random() * 13)];
    const naipe = naipes[Math.floor(Math.random() * 4)];

    let valor;
    if (numero === "A") {
      valor = 11;
    } else if (numero === "J" || numero === "Q" || numero === "K") {
      valor = 10;
    } else {
      valor = Number(numero);
    } while (numero === "A" && valor === 11 && usuario.some(carta => carta.valor === 11));

    const carta = {
      texto: numero + naipe,
      valor: valor
    };

    return carta;
  }

  let usuario = [];
  let computador = [];

  for (let i = 0; i < 2; i++) {
    usuario.push(comprarCarta());
    computador.push(comprarCarta());
  }

  let pontosUsuario = usuario[0].valor + usuario[1].valor;
  let pontosComputador = computador[0].valor + computador[1].valor;
  

  while (confirm("Suas cartas são " + usuario[0].texto + ", " + usuario[1].texto + " - Pontuação: " + pontosUsuario
    + "\nComputador - carta: " + computador[0].texto + "\nDeseja adicionar mais uma carta?")) {
    const novaCarta = comprarCarta();
    usuario.push(novaCarta);

    alert("Usuário - nova carta: " + novaCarta.texto);
    pontosUsuario += novaCarta.valor;
    alert("Pontuação do usuário: " + pontosUsuario);

    if (pontosUsuario > 21) {
      alert("O usuário estourou! O computador ganhou!");
      break;
    }
  }

  if (pontosUsuario <= 21) {
    while (pontosComputador < 21 && pontosComputador <= pontosUsuario) {
      const novaCarta = comprarCarta();
      computador.push(novaCarta);

      pontosComputador += novaCarta.valor;
    }

    alert("Computador - cartas: " + computador.map(carta => carta.texto).join(", "));
    alert("Pontuação do computador: " + pontosComputador);

    if (pontosComputador > 21) {
      alert("O computador estourou! O usuário ganhou!");
    } else if (pontosUsuario > pontosComputador) {
      alert("O usuário ganhou!");
    } else if (pontosComputador > pontosUsuario) {
      alert("O computador ganhou!");
    } else {
      alert("Empate!");
    }
  }
} else {
  alert("Fim de jogo");
}