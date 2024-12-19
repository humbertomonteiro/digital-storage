# E-commerce Frontend Project - Digital Store 🛒

Este projeto foi desenvolvido como parte de um curso para testar as habilidades do grupo no desenvolvimento frontend. O objetivo foi criar uma aplicação de e-commerce funcional e moderna utilizando tecnologias como **React**, **Vite**, e bibliotecas auxiliares.

## 📋 Índice

- [E-commerce Frontend Project - Digital Store 🛒](#e-commerce-frontend-project---digital-store-)
  - [📋 Índice](#-índice)
  - [📖 Descrição](#-descrição)
  - [⚙️ Funcionalidades](#️-funcionalidades)
  - [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [🚀 Instalação e Execução](#-instalação-e-execução)
    - [Pré-requisitos](#pré-requisitos)
    - [Passos para rodar o projeto](#passos-para-rodar-o-projeto)
  - [📂 Estrutura do Projeto](#-estrutura-do-projeto)
  - [Licença](#licença)
  - [👥 Créditos](#-créditos)
    - [Integrantes do grupo](#integrantes-do-grupo)
  - [Projeto em produção na vercel](#projeto-em-produção-na-vercel)

---

## 📖 Descrição

O projeto é um protótipo de e-commerce que permite aos usuários:

- Navegar por produtos.

O foco principal foi a **estruturação do frontend**, com navegação por rotas, design responsivo e interatividade.

---

## ⚙️ Funcionalidades

- **Navegação por páginas**:

  - Página inicial com destaque para produtos.
  - Listagem de produtos.
  - Filtragem de produtos.
  - Página de detalhes do produto.

- **Responsividade**:

  - Layout adaptado para diferentes tamanhos de tela (desktop, tablet, e mobile).

- **Componentização**:
  - Uso de componentes reutilizáveis para facilitar a manutenção e escalabilidade do código.

---

## 🛠 Tecnologias Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

- **[Vite](https://vitejs.dev/)**: Ferramenta de construção rápida para projetos modernos.
- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[React Router DOM](https://reactrouter.com/)**: Biblioteca para gerenciamento de rotas.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Biblioteca de ícones para enriquecer a interface.

---

## 🚀 Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina.
- Gerenciador de pacotes (NPM ou Yarn).

### Passos para rodar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/humbertomonteiro/digital-storage.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd seu-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse:

   ```bash
   http://localhost:5173
   ```

## 📂 Estrutura do Projeto

```bash
src/
├── assets/          # Imagens e arquivos estáticos
├── components/      # Componentes reutilizáveis
├── data/            # Contstants, Contexts e Hooks
├── pages/           # Páginas da aplicação
├── routes/          # Configuração de rotas
├── index.css/       # Arquivos de estilo global
├── App.jsx          # Componente principal
├── main.jsx         # Ponto de entrada do projeto
```
```bash
├── src/
│   ├── compoments/
│   │   ├── Header #Humberto
│   │   ├── Footer #Luan
│   │   ├── Logo #Luan
│   │   ├── ProductListing #Humberto
│   │   ├── ProductCard #Nathalia
│   │   ├── ProductOptions #Humberto
│   │   ├── BuyBox #Humberto
│   │   ├── GalleryHome #Luan OBS: só foi usado para teste
│   │   ├── Gallery #Humberto / Luan   OBS: Funcional e aplicado no site
│   │   ├── BuyBox #Nathalia
│   │   ├── Section #Nathalia
│   │   ├── FilterGroup #Humberto
│   │   └── ProductDetails #Nathalia
│   └── pages/
│       ├── HomePage # Nathalia / Humberto / Luan
│       ├── ProductViewPage # Nathalia / Humberto / Luan
│       └── ProductListingPage # Nathalia / Humberto / Luan
├── App.js
└── index.js
```


## Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo, modificá-lo e distribuí-lo.

## 👥 Créditos

Projeto desenvolvido no contexto de um curso para testar habilidades em frontend.

### Integrantes do grupo

- Nathalia Sousa [Github](https://github.com/lia-asous)
- Francisco Luan Carlos Gregório [Github](https://github.com/GregoriusBlack)
- Humberto Monteiro Araujo Filho [Portfólio](https://portfolio-three-bay-73.vercel.app/)

## Projeto em produção na vercel

[Digital Store](https://digital-storage.vercel.app/)
