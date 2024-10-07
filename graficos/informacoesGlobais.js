
const url = "https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/Aula01/transporte/transporte-dados-globais.json"


async function visualizarInformacoesGlobais(){
    const res = await fetch (url)
    const dados = await res.json()
    console.log(dados)
}

visualizarInformacoesGlobais()