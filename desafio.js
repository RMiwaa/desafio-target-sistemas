const data = require("./dados.json");
const estados = [
  { nome: "SP", valor: 67836.43 },
  { nome: "RJ", valor: 36678.66 },
  { nome: "MG", valor: 29229.88 },
  { nome: "ES", valor: 27165.48 },
  { nome: "Outros", valor: 19849.53 },
];

function somarNumeros() {
  let indice = 13;
  let soma = 0;

  for (let k = 0; k < indice; k++) {
    soma += k;
  }

  console.log("resultado 01 : " + soma);
}

function fibonacci(numero) {
  let a = 0;
  let b = 1;
  let total = 0;
  console.log("resultado 02 utilizando " + numero + " como limite : ");
  while (total < numero) {
    console.log(total);
    total = a + b;
    b = a;
    a = total;
  }
}

function menorFaturamento(data) {
  let valorAnterior = data[0].valor;
  for (i = 0; i < data.length; i++) {
    if (data[i].valor < valorAnterior && data[i].valor != 0) {
      valorAnterior = data[i].valor;
    }
  }
  console.log("Resultado 03, menor faturamento mensal : " + valorAnterior);
}

function maiorFaturamento(data) {
  let valorAnterior = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i].valor > valorAnterior) {
      valorAnterior = data[i].valor;
    }
  }
  console.log("Resultado 03, maior faturamento mensal : " + valorAnterior);
}

function diasAcimaDaMedia(data) {
  let media = 0;
  let total = 0;
  let contador = 0;
  for (i = 0; i < data.length; i++) {
    total += data[i].valor;
  }

  media = total / data.length;

  for (i = 0; i < data.length; i++) {
    if (data[i].valor > media) {
      contador++;
    }
  }
  console.log("Resultado 03, quantidade de dias acima da média : " + contador);
}

function porcentagem(estados) {
  let total = 0;
  for (let i = 0; i < estados.length; i++) {
    total += estados[i].valor;
  }
  for (i = 0; i < estados.length; i++) {
    console.log(
      "Resultado 04 : " +
        estados[i].nome +
        " - " +
        estados[i].valor +
        " - " +
        ((estados[i].valor * 100) / total).toFixed(2) +
        "%"
    );
  }
}

function inverter(string) {
  invertido = "";
  indiceInvertido = string.length;
  for (let i = 0; i < string.length; i++) {
    invertido += string[indiceInvertido - 1];
    indiceInvertido--;
  }
  console.log("Resultado 05 invertendo " + string + " : " + invertido);
}

somarNumeros();
fibonacci(100);
menorFaturamento(data);
maiorFaturamento(data);
diasAcimaDaMedia(data);
porcentagem(estados);
inverter("lorem ipsum");
