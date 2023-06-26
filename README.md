<p align="center">
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/a5fd63ca-95dc-438c-89c1-e5ae4cc9ff9e" alt="Logo do Fliper Masters" />
</p>

# Teste técnico App Masters

Repositório criado para o teste técnico a ser realizado para vaga de Estagiário Front-End na empresa App Masters.

Como a API fornecida consiste numa temática de jogos, optei por fazer o layout da página utilizando uma roupagem mais retrô, que remete aos jogos antigos (como os do atari) e aos arcades de antigamente.
A escolha desta linha para o design da página se deu por conta do meu apreço e sentimento de nostalgia que este tema me traz. Também é um tipo de estética que gosto bastante.

Seguem abaixo algumas imagens para ilustrar como ficou.

### Layout da página em desktop
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/2672f926-caf1-4511-ad92-adc3a77448d7" alt="Imagem do projeto rodando em um browser desktop" />

### Layout da página em dispositivos mobile
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/9bc957cc-0044-4858-bd84-d8db9041f3c0" alt="Imagem do projeto rodando em um browser mobile" />

## No que consiste o teste

Receber uma API e através dela entregar ao menos 8 dos requisitos abaixo:

- O projeto em React ou Next.JS
- Obter a lista de jogos da API
- Apresentar um loader enquanto os dados são obtidos
- Apresentar os jogos em três colunas (no computador)
- Em cada card apresentar o título e imagem pelo menos
- Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular
- Tratar erros advindos do código HTTP 500+
- Lidar com demais erros
- Ao realizar uma chamada que demore mais de 5s abortar a requisição e informar ao usuário
- Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader
- Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive
- Uma vez que tenha os dados em mãos, permitir filtros

## Tecnologias e ferramentas utilizadas
### `React`
Um dos requisitos para o teste técnico era escolher entre React e Next, apesar de trabalhar também com Next, sou mais produtivo em React, esse foi o motivo da minha escolha dentre as duas.

### `CSS puro`
Como a implementação do estilo era relativamente simples optei por não utilizar de nenhum framework ou pré-processador.

### `React-router-dom`
Para a implementação das rotas foi utilizado o react-router-dom, pois é uma ferramenta bastante popular além de fácil implementação.

### `React-icons`
Para a inclusão de ícones.

### `React-Query`
A integração com a API foi utilizada a lib React-Query.
Ferramenta de fácil utilização e amplamente utilizada na comunidade, a escolha se deu por estes motivos.


## Pontos de melhoria
### Multifiltros, busca em cima dos filtros, paginação e exibição dos itens
Como foi solicitado somente um filtro por gênero simples, optei por fazê-lo assim a fim de produtividade. A busca também não busca diretamente nos filtros, e sim no conteúdo como um todo.

Outro ponto relevante é a páginação. A não implementação foi uma escolha por questão de tempo hábil, mas é um quesito extremamente necessário, tanto pela questão da experiência do usuário quanto
por questão de desempenho do sistema.

A ausência da apresentação dos jogos em uma página ao serem clickados foi uma estratégia por questão de tempo também. Como não fazia parte dos requisitos iniciais optei por não entregar nesta etapa, mas
por se tratar de um item "core" para à aplicação, esta também se faz necessárias em etapas futuras.

Como pontos de melhoria para implementações futura ficam estes quatro pontos destacados.

## Desafios, dificuldades e superação
Por se tratar de um projeto simples, a maior dificuldade foi a utilização da biblioteca React-Query. Tive que aprender a utilizá-la, e a partir de hoje só trabalharei com ela.
Facilita a manipulação de estados e boa parte da tratativa disso fica "por baixo dos panos", facilitando a implementação.

A implementação de filtros também foi algo que nunca tinha usado na minha carreira até então, apesar de ser uma aplicação bastante comum. O filtro simples é relativamente fácil, a aplicação de multifiltros é a parte
mais difícil.

## Conclusão
Pude atender todos os 12 requisitos solicitados e tem sido bastante gratificante participar deste processo seletivo.

Por fim, o projeto pode ser visualizado na Vercel: https://flipermasters.vercel.app/
