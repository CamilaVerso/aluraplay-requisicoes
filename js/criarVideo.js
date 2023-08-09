import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");


async function criarVideo(evento) {
	evento.preventDefault();

	const imagem = document.querySelector("[data-imagem]").value;
	const url = document.querySelector("[data-url]").value;
	const titulo = document.querySelector("[data-titulo]").value;
	const descricao = Math.floor(Math.random() * 10).toString();

	await conectaApi.criaVideo(titulo, descricao, url, imagem); // não pode mudar a ordem dos parâmetros

	window.location.href = "../pages/envio-concluido.html";
	console.log('criou o video', criarVideo);
}

formulario.addEventListener("submit", evento => criarVideo(evento))