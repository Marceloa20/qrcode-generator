# Gerador de QR Code

Aplicação web simples e funcional que permite ao usuário gerar códigos QR a partir de textos ou URLs de forma instantânea.

> **Status do Projeto:** ✅ Concluído (v1.0)

---

## Demonstração
Você pode testar a aplicação funcionando aqui:
[Clique para acessar o Gerador de QR Code](https://marceloa20.github.io/qrcode-generator/)

---

## Tecnologias Utilizadas
O projeto foi desenvolvido focando em fundamentos de desenvolvimento web:

* **HTML5:** Estruturação semântica.
* **CSS3:** Layout responsivo com Flexbox e variáveis (`:root`).
* **JavaScript (Vanilla):** Manipulação de DOM e lógica de eventos assíncronos.
* **API Externa:** Consumo da [goqr.me API](https://goqr.me/api/) para geração das imagens.

---

## Funcionalidades
* [x] Geração de QR Code em tempo real.
* [x] Validação de campo (impede geração com campo vazio).
* [x] Feedback visual de carregamento (evento `load`).
* [x] Atalho de teclado (Tecla Enter).
* [x] Interface otimizada para Dark Mode.

---

## Como executar o projeto
1. Clone este repositório:
   ```bash
   git clone git@github.com:Marceloa20/qrcode-generator.git