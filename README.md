# Diário de Bordo – Aplicativo Web Progressivo (PWA)

## 1. Introdução

Este projeto consiste no desenvolvimento de um **Aplicativo Web Progressivo (Progressive Web App – PWA)** denominado **Diário de Bordo**, cujo objetivo é permitir o registro de atividades diárias do usuário de forma simples e eficiente. A aplicação foi desenvolvida utilizando tecnologias web padrão e segue boas práticas de desenvolvimento, acessibilidade e otimização.

---

## 2. Objetivo

O objetivo deste projeto é aplicar conceitos de **Progressive Web Apps**, proporcionando uma aplicação que:

- Permita o registro de atividades diárias
- Funcione corretamente em modo offline
- Possa ser instalada na tela inicial do dispositivo
- Armazene dados localmente no navegador
- Atenda requisitos básicos de acessibilidade e SEO

---

## 3. Funcionalidades Implementadas

- Criação de entradas contendo **título**, **descrição** e **data**
- Listagem das entradas registradas
- Remoção de entradas existentes
- Persistência dos dados utilizando **localStorage**
- Interface responsiva para dispositivos móveis e desktops
- Animações visuais ao adicionar e remover registros

---

## 4. Tecnologias Utilizadas

- **HTML5** – Estrutura da aplicação  
- **CSS3** – Estilização e responsividade  
- **JavaScript (Vanilla)** – Lógica da aplicação  
- **Service Worker** – Suporte ao funcionamento offline  
- **Web App Manifest** – Configuração do PWA  
- **LocalStorage** – Armazenamento persistente de dados  

---

## 5. Estrutura do Projeto

Exercício módulo 31/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
└── icons/
    ├── icon-192.png
    └── icon-512.png

---

## 6. Progressive Web App (PWA)

A aplicação atende aos principais critérios exigidos para um PWA:

- Manifest configurado com nome, ícones e cores
- Ícones nos tamanhos 192x192 e 512x512
- Service Worker registrado e ativo
- Funcionamento offline
- Possibilidade de instalação como aplicativo
- Compatibilidade com o Lighthouse do Chrome DevTools

---

## 7. Acessibilidade

Foram aplicadas boas práticas de acessibilidade, incluindo:

- Uso de **labels associados aos campos de formulário**
- Estrutura semântica adequada
- Compatibilidade com leitores de tela

Essas melhorias garantem maior inclusão e melhor avaliação nos testes automáticos.

---

## 8. SEO

A aplicação segue práticas básicas de otimização para mecanismos de busca, tais como:

- Definição de título da página
- Inclusão de metadescrição
- Estrutura HTML adequada

---

## 9. Testes e Validação

A aplicação foi testada por meio da ferramenta **Lighthouse**, disponível no Chrome DevTools, obtendo boas pontuações nas seguintes categorias:

- Performance
- Acessibilidade
- Práticas recomendadas
- SEO
- Progressive Web App

---

## 10. Execução do Projeto

Para o funcionamento correto do PWA, recomenda-se a execução por meio de um servidor local.

### Procedimento sugerido:
- Utilizar a extensão **Live Server** no Visual Studio Code
- Abrir o arquivo `index.html` por meio do Live Server

---

## 11. Instalação da Aplicação

Após a execução em um navegador compatível, a aplicação pode ser instalada na tela inicial do dispositivo por meio do botão de instalação disponibilizado pelo navegador.

---

## 12. Autor

Projeto desenvolvido por **Lucas Lana**, com finalidade acadêmica, como atividade prática sobre Progressive Web Apps (PWA).

---
