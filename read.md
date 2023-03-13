<h1>Opa! Salve galerinha, beleza? </h1>

Então, como conversei com a Sheila hoje mais cedo, ai está o conserto da modal que pediram.
Neste documento, vou listar para vocês a correção que fiz e algumas dicas de melhora no css e no Js.

<h2>No entanto, gostaria de informar que vocês foram ótimos, beleza? Portanto, existiram algunas erros 
que eu consertei para o melhor funcionamento do esperado comportamento.</h2>

<strong>Primeira coisa, o CSS:</strong>

Vocês utilizam muita coisa que poderia ter sido "capada" do código e percebi uma grande utilização da tag body,
não está errado, pelo contrário, pode ser utilizada, no entanto, não é considerada uma boa prática adicionar tantos elementos 
na tag como estava. Mas, então? qual o melhor? Sempre que forem fazer uma aplicação web, apliquem em primeira mão uma tag main
está tag tera um css padrão que irá ser aplciado em todos os elementos filhos que vocês quiserem e esta tag obrigatóriamente terá que ter 
width e height em cobrimento de toda a tela. Contudo, posso utilizar tag body padrão sem a tag main? Claro! Porém, deve-se ter em mente 
que ao utilizar este método, vocês deverão aplicar containers individuais para cada filho que forem dispor em tela! Tudo bem? 

P.S: A tag body não necessita do valor css position = relative. Ela sempre será relativa, é o comportamento padrão. :)
P.S: Se algo que eu falei até agora vocês estvam fazendo e não estava funcionando, possivelmente existia um "vazamento" de css,
muito comum e sempre atrapalha na construção dos sites.

<strong>Segunda coisa, componentes filhos e semântica: </strong>
Usem e abusem da utilização de componentes filhos em seus respectivos containers, uma coisa que sempre acaba quebrando uma página é a 
utilização de um padding o margin em um componente que é utilizado por toda a aplicação. Um exemplo:

<!-- <main
  style="padding=20px"
>
  <div> // componente filho
  <div> // componente filho
  <div> // componente filho
</main> -->

Nesta aplicação o padding irá afetar todos os seus componentes filhos, não é proíbido e muito menos errado, contudo, ás chances de um 
vazamento de css e uma barra de scrolling na página é muito mais alta do que sem isso. Mas, então? como posso contornar? Simples:

<!-- <main
  style = "valores padrões do css (margin:0;padding:0)"
>
  <div class="classe do filho // 1">

  </div> // componente filho
  <div class="classe do filho // 2">

  </div> // componente filho
  <div class="classe do filho // 3">

  </div> // componente filho
</main> -->

Considerem a "classe do filho" é uma classe geral que todos os containers filho utilizam, isso é chamada de "classe de apoio" ou 
"classe auxiliar", nela geralmente é utilizada valores de estilo do css que todos os componentes filhos costumam compartilhar. Sendo assim,
é uma ótima prática e ajuda vocês a dividirem melhor o css. É nesta "classe auxiliar" que vocês irão aplicar os valores de estilos padrão que cada container deve ter. Você pode variar está classe de acordo á sua necessidade. 

A semântica de vocês estava boa, como dito antes, mudei apenas a tag body para uma tag main que engloba os valores css abundantes que estavam na tag body. Podemos ter duas tag main no mesmo arquivo? Sim! A resposta para a utilização da tag main sempre será o container pai que ela esta localizada! Exemplo: 

<!-- 
"<main> 

  <section>

    <main>

    </main>

  </section>

</main>"" 
-->

A primeira tag main diz respeito a todos os componentes filhos, incluindo as sections. Logo, a segunda tag main, diz respeito apenas ao conteudo da section! ou seja, a segunda tag main será o conteudo principal da section em que ela está!

<strong>terceira coisa, Javascript: </strong>
Esta parte aqui também estava boa, faltava apenas uma questão a ser colocada no componente de vocês. O valor css "display: none" como padrão. Lembrem-se, o css sempre vai ser reinterado na página, sempre que for recarregada, neste caso, o valor padrão tende ser "none" para assim aplicar a lógica e conseguir incrementar na modal o "display: flex". Me dispos a adicionar duas outras maneiras de mexer com o Javascript somente para viés de estudos, para mostrar-lhes que sempre há uma alternativa. Para a utilização de vocês basta adicionar novamente os onClick em cada botão e descomentar a parte comentada!

Lembrando que, a de vocês NUNCA esteve errada. Apenas temos caminhos diferentes para a mesma solução.

P.S: Não alterei nenhuma animação ou mudei classes CSS impertinentes para o funcionamento, apenas melhorei o que precisava para conseguir colocar a modal em funcionamento!
P.S: Tem algumas animações quebrando o scrolling horizontal da página! Acho que já perceberam, naõ se esqueçam de consertar para mostrar ao mentor! Qualquer dúvida a disposição!

#Peace!