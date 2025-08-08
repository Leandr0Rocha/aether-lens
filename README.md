# Aether Lens: Seu Centro de Filmes

Aether Lens é um site de filmes dinâmico que permite aos usuários pesquisar filmes, explorar títulos populares e salvar seus filmes favoritos. Construído com tecnologias web modernas, oferece uma experiência suave e intuitiva para descobrir conteúdo cinematográfico.

## ✨ Recursos

  * **Busca de Filmes:** Encontre filmes facilmente usando a barra de pesquisa, alimentada pela API The Movie Database (TMDb).
  * **Filmes Favoritos:** Marque filmes como favoritos para criar sua coleção personalizada. Seus favoritos são salvos localmente em seu navegador.
  * **Navegação por Categorias:** Explore filmes categorizados por títulos populares e vários gêneros como Ação, Aventura, Comédia e Terror.
  * **Design Responsivo:** Experiência fluida em qualquer dispositivo, com layout adaptado para desktop, tablet e smartphones.
  * **Interface Moderna:** Visual limpo, com grid responsivo, ícones SVG otimizados e navegação intuitiva.
  * **Acessibilidade:** Elementos navegáveis por teclado e contraste de cores adequado.
  * **Gerenciamento de Estado Global:** Favoritos e buscas são mantidos em contexto global, sem prop drilling.

## 🚀 Tecnologias

  * **React:** Biblioteca para construção de interfaces de usuário.
  * **Vite:** Ferramenta de build e desenvolvimento rápido.
  * **Tailwind CSS:** Framework utility-first para estilização responsiva e customizada.
  * **React Router DOM:** Roteamento declarativo entre páginas (`/`, `/busca`, `/favoritos`).
  * **Context API:** Gerenciamento global do estado dos favoritos.
  * **The Movie Database (TMDb) API:** Fonte dos dados de filmes, gêneros e buscas.
  * **SVGs Otimizados:** Ícones sociais e de interface em SVG, com fallback para imagens locais.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

  * Node.js (versão LTS recomendada)
  * npm ou Yarn

### Instalação

1. **Clone o repositório:**

    ```bash
    git clone <url-do-repositorio>
    cd aether-lens
    ```

2. **Crie um arquivo `.env` na raiz do projeto com sua chave da API TMDb:**

    ```
    VITE_TMDB_API_KEY=sua_chave_aqui
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

4. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5. **Acesse o aplicativo:**  
    Abra seu navegador e navegue até o endereço mostrado no terminal (por exemplo, `http://localhost:5173`).

## 🙏 Créditos

  * **The Movie Database (TMDb):** Fornece os dados de filmes usados nesta aplicação.
  * **Ícones SVG:** Utilizados para redes sociais e interface, disponíveis na pasta `/public/svg`.

Aproveite para descobrir seu próximo filme favorito com Aether Lens.