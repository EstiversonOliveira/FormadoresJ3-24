
const url = "https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/Aula01/transporte/transporte-dados-globais.json"


async function visualizarInformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    //console.log(dados)
    const paragrafo = document.createElement("p");
    paragrafo.classList.add("graficos-container__texto");
    paragrafo.innerHTML = 
    `
    Cerca de 38% das mais de <span>${dados.total_pessoas_mundo}</span> bilhões de pessoas do mundo estão no
          mercado de trabalho, ou seja, aproximadamente <span>${dados.total_trabalhadores_mundo}</span> de
          trabalhadores. Do total de trabalhadores, <span>${dados.total_pessoas_que_necessitam_transporte_para_trabalho} </span> precisam de
          transporte para o trabalho. Dessa forma, <span> ${100-(dados.total_pessoas_que_necessitam_transporte_para_trabalho/dados.total_trabalhadores_mundo)} </span> % está em teletrabalho ou mora perto do
          trabalho, de forma a não precisar de deslocamento. Entre os que
          precisam de transporte, o tempo necessário para isso é de cerca de 54
          minutos. Esse tempo pode ser utilizado para ouvir PodCasts ou
          videoaulas, caso o transporte seja público ou por aplicativo. Um
          serviço que pode ser oferecido é o de Podcasts com duração compatível
          com esse tempo de deslocamento.
    `
    const container = document.getElementById("graficos-container");
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais()