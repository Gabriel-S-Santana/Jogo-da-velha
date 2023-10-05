const jogadorAtual = document.querySelector(".currentPlayer");

let selecionado;
let jogador = "X";

let posicoes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selecionado = [];

  jogadorAtual.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", novoMovimento);

  });
}

init();

function novoMovimento(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = jogador;
  e.target.removeEventListener("click", novoMovimento);
  selecionado[index] = jogador;

  setTimeout(() => {
    check();
  }, [100]);

  jogador = jogador === "X" ? "O" : "X";
  jogadorAtual.innerHTML = `JOGADOR DA VEZ: ${jogador}`;

  if (jogador === "0"){
    movimentoMaquina();
  }
}

  function movimentoDaMaquina() {
    const vazio = [];

      for (let i = 1; i <= 9; i++){
        if (!selecionado[i]) {
          vazio.push(i);
      }
    }
  }

  const indiceAleatorio = Math.floor(Math.random() * vazios.length);
  const escolhaDaMaquina = vazios[indiceAleatorio];
  const botao = document.querySelector(`[data-i="${escolhaDaMaquina}"]`);
  if (botao) {
    setTimeout(() => {
      botao.click();
    }, 500);
  }


function check() {
  let jogadorUltimoMovimento = jogador === "X" ? "O" : "X";

  const items = selecionado
    .map((item, i) => [item, i])
    .filter((item) => item[0] === jogadorUltimoMovimento)
    .map((item) => item[1]);

  for (pos of posicoes) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + jogadorUltimoMovimento + "' GANHOU!");
      init();
      return;
    }
  }

  if (selecionado.filter((item) => item).length === 9) {
    alert("EMPATE!");
    init();
    return;
  }
}