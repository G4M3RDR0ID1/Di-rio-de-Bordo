# Diário de Bordo — Progressive Web App (PWA)

O Diário de Bordo é uma aplicação web desenvolvida como **Progressive Web App (PWA)** que permite ao usuário registrar atividades diárias de forma simples e organizada.  
O projeto foi criado com foco em **funcionamento offline**, **instalação como aplicativo**, **persistência local de dados** e **boas práticas de desenvolvimento front-end**.

---

## Objetivo do Projeto

Aplicar os principais conceitos de **Progressive Web Apps**, desenvolvendo uma aplicação que:

- Permite o registro de atividades diárias
- Funciona corretamente em modo offline
- Pode ser instalada como aplicativo (desktop ou mobile)
- Armazena dados localmente no navegador
- Segue boas práticas de acessibilidade e SEO

---

## Funcionalidades

- Criação de entradas com título, descrição e data
- Listagem das entradas registradas
- Remoção de entradas existentes
- Persistência de dados utilizando LocalStorage
- Interface responsiva para desktop e dispositivos móveis
- Animações visuais ao adicionar e remover registros
- Funcionamento offline completo
- Botão customizado para instalação do aplicativo (PWA)

---

## Tecnologias Utilizadas

- HTML5 — Estrutura semântica da aplicação  
- CSS3 — Estilização, layout e responsividade  
- JavaScript (Vanilla) — Lógica da aplicação  
- Service Worker — Cache e funcionamento offline  
- Web App Manifest — Configuração do PWA  
- LocalStorage — Armazenamento persistente de dados  

---

## Estrutura do Projeto

```text
/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── screenshots/
    └── home.png
```

---

## Progressive Web App (PWA)

A aplicação atende aos principais critérios exigidos para um PWA moderno:

- Manifest configurado com nome, ícones, cores e screenshots
- Ícones nos tamanhos 192x192 e 512x512 (maskable)
- Service Worker registrado e ativo
- Funcionamento offline estável
- Instalação como aplicativo em desktop e dispositivos móveis
- HTTPS via deploy
- Compatibilidade com o Lighthouse do Chrome DevTools

---

## Acessibilidade

Foram aplicadas boas práticas de acessibilidade, incluindo:

- Uso de labels associados aos campos de formulário
- Estrutura HTML semântica
- Compatibilidade com leitores de tela

Essas práticas contribuem para uma melhor experiência do usuário e melhor avaliação em testes automáticos.

---

## SEO

A aplicação segue práticas básicas de SEO, como:

- Definição de título da página
- Inclusão de meta description
- Estrutura HTML adequada

---

## Testes e Validação

O projeto foi validado utilizando a ferramenta Lighthouse, obtendo boas pontuações nas categorias:

- Performance
- Acessibilidade
- Práticas recomendadas
- SEO
- Progressive Web App

---

## Como executar o projeto localmente

### Clonar o repositório
```bash
git clone https://github.com/G4M3RDR0ID1/Di-rio-de-Bordo.git
```

### Acessar a pasta do projeto
```bash
cd Di-rio-de-Bordo
```

### Executar utilizando um servidor local
Recomenda-se o uso da extensão Live Server no Visual Studio Code.

---

## Deploy

A aplicação está disponível online com HTTPS através do Netlify:

https://diario-d-bordo.netlify.app/

---

## Instalação do Aplicativo

Ao acessar o site em um navegador compatível (Chrome, Edge ou mobile), será exibido um botão “Instalar Aplicação”, permitindo adicionar o app à tela inicial e utilizá-lo como um aplicativo nativo.

---

## Autor

Projeto desenvolvido por **Lucas Lana**, como parte do curso de Front-End da EBAC, com foco na aplicação prática dos conceitos de Progressive Web Apps (PWA).

---

## Status do Projeto

Concluído  
PWA funcional  
Offline e instalável  
Pronto para portfólio  
