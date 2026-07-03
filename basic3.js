try {
let saldo = 100;
let valorSaque = 100;
if (valorSaque > saldo) {
throw new Error("Saldo insuficiente");
}
console.log("Saque realizado");
} catch (erro) {
console.log("Erro:", erro.message);
}