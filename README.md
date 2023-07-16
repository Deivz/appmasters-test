<p align="center">
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/a5fd63ca-95dc-438c-89c1-e5ae4cc9ff9e" alt="Logo do Fliper Masters" />
</p>

# Teste técnico App Masters

Repositório criado para o teste técnico a ser realizado para vaga de Estagiário Front-End na empresa App Masters.

Como a API fornecida consiste numa temática de jogos, optei por fazer o layout da página utilizando uma roupagem mais retrô, que remete aos jogos antigos (como os do atari) e aos arcades de antigamente.
A escolha desta linha para o design da página se deu por conta do meu apreço e sentimento de nostalgia que este tema me traz. Também é um tipo de estética que gosto bastante.

Seguem abaixo algumas imagens para ilustrar como ficou.

`O LAYOUT FOI MODIFICADO DA PRIMEIRA ETAPA PARA A SEGUNDA, BEM COMO ALGUMAS FUNCIONALIDADES. TODAS AS MODIFICAÇÕES SERÃO RELATADAS`

### Layout da página em desktop na VERSÃO ANTIGA
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/2672f926-caf1-4511-ad92-adc3a77448d7" alt="Imagem do projeto rodando em um browser desktop" />

### Layout da página em desktop na VERSÃO ATUAL
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/d8cf584f-28d7-449a-929c-5d0d51af09ad" alt="Imagem do projeto versão atual rodando em um browser desktop" />

### Layout da página em dispositivos mobile na VERSÃO ANTIGA
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/9bc957cc-0044-4858-bd84-d8db9041f3c0" alt="Imagem do projeto rodando em um browser mobile" />

### Layout da página em dispositivos mobile na VERSÃO ATUAL
<img src="https://github.com/Deivz/appmasters-test/assets/78604613/5d12b2a3-cd5d-4b6c-92d1-b3e8f37f468a" alt="Imagem do projeto versão atual rodando em um browser mobile" />


## No que consiste o teste

`Primeira etapa:`
<br />
Receber uma API e através dela entregar ao menos 8 dos requisitos abaixo:

- O projeto em React ou Next.JS; :heavy_check_mark:
- Obter a lista de jogos da API; :heavy_check_mark:
- Apresentar um loader enquanto os dados são obtidos; :heavy_check_mark:
- Apresentar os jogos em três colunas (no computador); :heavy_check_mark:
- Em cada card apresentar o título e imagem pelo menos; :heavy_check_mark:
- Lidar com a responsividade, para que fique bem apresentado no computador, tablets ou celular; :heavy_check_mark:
- Tratar erros advindos do código HTTP 500+; :heavy_check_mark:
- Lidar com demais erros; :heavy_check_mark:
- Ao realizar uma chamada que demore mais de 5s abortar a requisição e informar ao usuário; :heavy_check_mark:
- Sempre que apresentar uma mensagem para o usuário, ou tiver os dados em mãos para apresentar, ocultar o loader; :heavy_check_mark:
- Incluir um campo de busca, que permite localizar jogos pelo título, com busca case insensitive; :heavy_check_mark:
- Uma vez que tenha os dados em mãos, permitir filtros; :heavy_check_mark:
<br />
<br />

`Segunda etapa:`
  <br />
  Continuando o projeto anterior, entregar ao menos 10 dos requisitos abaixo:

- Utilizar Firebase para realizar autenticação usando email/senha; :heavy_check_mark:
- Ter um campo para o usuário favoritar o jogo diretamente na lista, ficando vermelho quando marcado; :heavy_check_mark:
- Salvar no firebase os jogos favoritos do usuário, no realtime ou firestore; :heavy_check_mark:
- Ter um botão “Favoritos” que apresenta apenas jogos favoritados, permitindo ainda buscar e filtrar estes jogos. Pode ser na própria lista já apresentada ou em uma separada.; :heavy_check_mark:
- Ao lado do coração, ter ★★★★ para o usuário avaliar o jogo, podendo marcar de uma em uma. Ou seja, ele pode escolher 1, 2, 3 ou as 4.; :heavy_check_mark:
- Ter uma forma de ordenar por avaliação, vendo os melhores (ou piores) primeiro, clicando novamente para inverter a ordem.; :heavy_check_mark:
- Ao carregar a interface, deixar o ❤️ vermelho para os itens favoritos e as ⭐️ amarelas nos itens avaliados; :heavy_check_mark:
- Ao acessar sem estar autenticado, os ícones 🩶 e ★ deverão estar visíveis, mas ao clicar irá solicitar a autenticação; :heavy_check_mark:
- Ao obter os jogos da API e os dados do firebase, apresentar. Manter o loading para os jogos. Não precisa de loading enquanto espera o firebase.; :heavy_check_mark:
- A autenticação deve acontecer na rota `/auth/` do frontend, usando o provedor “E-mail/senha” do firebase, onde o usuário poderá criar uma conta ou acessar a conta já existente (se mantendo apenas nesta rota); :heavy_check_mark:
- Escolher um item para aplicar uma animação com CSS, pode ser ao favoritar, ou avaliar, ou quando os itens surgirem; :heavy_check_mark:
- Publicar seu projeto online para testes (na mesma url de antes); :heavy_check_mark:

## Tecnologias e ferramentas utilizadas
### `React`
Um dos requisitos para o teste técnico era escolher entre React e Next, apesar de trabalhar também com Next, sou mais produtivo em React, esse foi o motivo da minha escolha dentre as duas.

### `TypeScript`
Por questão de produtividade e segurança durante o prócesso de desenvolvimento da aplicação, optei por TypeScript à JavaScript.
Ser avisado dos erros e possíveis erros antes de rodar o código é sempre vantajoso, tanto por questão de segurança quanto pela já mencionada produtividade.

### `CSS puro` - `deprecated`
~Como a implementação do estilo era relativamente simples optei por não utilizar de nenhum framework ou pré-processador.~

### `Styled-Components`
Uma vez que o projeto ganhou uma nova etapa, e esta consiste na ampliação do escopo antigo, optei por utilizar o styled-components, pois ele permite à aplicação uma maior escalabilidade (bem como maior produtividade).

### `React-router-dom`
Para a implementação das rotas foi utilizado o react-router-dom, pois é uma ferramenta bastante popular além de fácil implementação.

### `React-icons`
Para a inclusão de ícones.

### `React-Query`
A integração com a API foi utilizada a lib React-Query.
Ferramenta de fácil utilização e amplamente utilizada na comunidade, a escolha se deu por estes motivos.

### `Firebase`
Um dos requisitos, e talvez o principal, é a utilização do Firebase para favoritar e avaliar os jogos, cadastro de usuários e personalização de tela de acordo com o login.


## Pontos de melhoria
### Multifiltros, busca em dentre os itens filtrados, botão de limpar busca, paginação e exibição dos itens
Na etapa anterior foram levantados pontos de melhoria para os seguintes itens: multifiltros, busca em dentre os itens filtrados, botão de limpar busca, paginação e exibição dos itens.

De todos os itens elencados, somente a paginação e a exibição dos itens (que não fazem parte do escopo da avaliação) não foram implementados.

## Desafios, dificuldades e superação
~Por se tratar de um projeto simples, a maior dificuldade foi a utilização da biblioteca React-Query. Tive que aprender a utilizá-la, e a partir de hoje só trabalharei com ela.
Facilita a manipulação de estados e boa parte da tratativa disso fica "por baixo dos panos", facilitando a implementação.~

Nesta nova etapa foi solicitada a utilização do Firebase. Como havia mencionado na etapa anterior, a maior dificuldade havia sido o React Query, ferramenta que nunca havia utilizado.
O Firebase se enquadra na mesma situação. Apesar de bastante conhecida e poderosa, é uma ferramenta com a qual nunca havia trabalhado. Foi bastante enriquecedor poder ter aprendido a utiliza-lo
e passei a implementa-lo em projetos pessoais futuros.

A implementação de multifiltros, ordenação e aplicação de avaliação e favoritos também foi algo que nunca tinha usado na minha carreira até então, apesar de serem aplicações bastante comuns.

## Conclusão
Acredito ter atendido todos os 12 requisitos solicitados (os 10 mínimo solicitados com certeza :rofl:) e tem sido bastante gratificante participar deste processo seletivo.

Por fim, o projeto pode ser visualizado na Vercel: https://flipermasters.vercel.app/
