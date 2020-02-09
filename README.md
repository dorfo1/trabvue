# trabvue

Criar um comparativo a nível de código entre a implementação do Vue e do React. Itens para serem comparados:

- Como criar um componente?

React - O react foi feito para dividirmos nossa UI em componentes, para criar um componente basta extender React.component ou criar um statless component que retorna um jsx.
EXEMPLOS :  [Components](https://github.com/dorfo1/trabvue/tree/master/trab-react/src/components)
Vue - Dentro da tag template criarmos sua UI e na tag script definirmos um nome e exporta-lo.
EXEMPLOS :[Components](https://github.com/dorfo1/trabvue/tree/master/trab-vue/src/components)

- Como usar CSS?
React - Importando o arquivo css e atribuindo como na propriedade className, já que class é uma palavra reservada.
EXEMPLOS : [CSS no componente de botão](https://github.com/dorfo1/trabvue/blob/master/trab-react/src/components/MyButton/MyButton.jsx)
Vue - Dentro da tag style podemos escrever o CSS ou importar um arquivo externo.
EXEMPLOS : [CSS no componente de botão](https://github.com/dorfo1/trabvue/blob/master/trab-vue/src/components/MyButton/MyButton.vue)

- Como criar rotas?
React - Rotas são criadas no arquivo router, usando a lib react-router
EXEMPLOS:[Arquivo de rotas](https://github.com/dorfo1/trabvue/blob/master/trab-react/src/routes.jsx)
Vue - Rotas são criadas no arquivo index, usando a lib vue-router
EXEMPLOS:[Arquivo de rotas](https://github.com/dorfo1/trabvue/blob/master/trab-vue/src/router/index.js)

- Como controlar as interações dos componentes?
React - Usando callbacks, passando via props.
EXEMPLOS :[Callback passado para componente do Botão.](https://github.com/dorfo1/trabvue/blob/master/trab-react/src/pages/MyPage/MyPage.jsx)
Vue - Usando callbacks, passando via props.
EXEMPLOS :[Callback passado para componente do Botão.](https://github.com/dorfo1/trabvue/blob/master/trab-vue/src/views/Home.vue)

- Como passar dados de uma API para o componentes e/ou página?
React - Usando axios para chamadas web, atualizando o estado após o término da chamada.No caso dos componentes, passando via props, demonstrado na página de api.
EXEMPLOS : [API](https://github.com/dorfo1/trabvue/blob/master/trab-react/src/pages/ApiPage/ApiPage.jsx)
Vue - Usando axios para chamadas web, atualizando o estado após o término da chamada.No caso dos componentes, passando via props, demonstrado na página de api.
EXEMPLOS : [API](https://github.com/dorfo1/trabvue/blob/master/trab-vue/src/views/Api.vue) 

- Como criar uma página?
React - Criar um componente normal, mas cadastra-lo como uma page na parte de router.
Vue - Criar um componente normal, mas cadastra-lo como uma page na parte de router.

- Qual a diferença do scaffolding gerado pelo os geradores de projeto de cada um deles?
O scaffolding do vuejs oferece uma maior variedade na criação,dando possibilidade de adiçao de algumas bibliotecas que são usadas no desenvolvimento
como vue-router e vuex(controle de estado), no caso do react não existe esta opção.

