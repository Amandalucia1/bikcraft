
/**Ativando menu  */
const links = document.querySelectorAll('nav a')

links.forEach(ativarlink)
function ativarlink(link) {
    const url = document.location.href
    const href = link.href

/**Abaixo inclui url e href parecido um dentro do outro */
    if (url.includes(href)) {
        link.classList.add("ativo")/*Criando classe no javascript tem que configurar no CSS*/
    }
}


//ativar itens orçamento

const parametros = new URLSearchParams(location.search) /*identifica parametro value e ID do html */
parametros.forEach(ativarproduto)/**Faz loop dos parametros (seguro e prata)*/

function ativarproduto(parametro) {
    const elemento = document.getElementById(parametro)/**pegando os parametros pelo id */
    if (elemento) {/**checando se existem para n dar erro */
        elemento.checked = true 
    }
    
}

console.log(parametros)


//Perguntas frequentes
/** ANTERIORMENTE foram feitas mudanças no HTML de SEGUROS e BICICLETAS e no CSS */

const perguntas = document.querySelectorAll('.perguntas button')//seleciona button

for (let c = 0; c < perguntas.length; c++) {
    const elemento = perguntas[c];
    elemento.addEventListener('click', ativarpergunta)
    function ativarpergunta(event) {
       const pergunta = event.currentTarget/**Da o elento HTML do item CLICADO */

       const controls = pergunta.getAttribute("aria-controls")/**SELECIONANDO ATRIBUTO HTML E CRIANDO VARIAVEL*/

       const resposta = document.getElementById(controls)/**PEGANDO O ID AO LADA DE CONTROLS */
       resposta.classList.toggle("ativa")/**TOGGLE MUDA ELEMENTO ABRE OU FECHA SE CLICADO */
      
       /**ORGANIZA A BAGAÇA ABAIXO */
       const ativa = resposta.classList.contains('ativa')
       pergunta.setAttribute('aria-expanded', ativa)
      
    }
    
}
//Galeria imagem
const galeria = document.querySelectorAll('.img-bikizinha img')/**Selecionado toda a lista de bicicletas */
const galeriaContainer = document.querySelector('.img-bikizinha')/**Selecionando a div galeria */

for (let c = 0; c < galeria.length; c++) {/**Criando o loop entre as lista de bicicletas */

    const elemento = galeria[c];
    elemento.addEventListener('click', galeriaClicavel)/**evento de clique */

    function galeriaClicavel(event) {
        const elementoHTML = event.currentTarget/**Pega todo o elemento HTML*/
       
        const media = matchMedia('(min-width:1000px)').matches/**É um tipo de mediaquery abaixo de 1000px ele desativa o prepend */

        if (media) {
            galeriaContainer.prepend(elementoHTML)/**Remove o elemento do lugar, coloca ele no primeiro elemento da div galeria, se eu clico numa imagem ela troca de lugar para 1° posicao da galeria */
        }
    }
}
//Animaçao do plugin
if (window.SimpleAnime) {/**Faz a verificação da existencia desse plugin na pagina em que foi criado */
    new SimpleAnime()
}
