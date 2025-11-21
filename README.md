<img width="720" height="579" alt="projeto" src="https://github.com/user-attachments/assets/58de13bf-e1eb-49f8-80d1-b0abaed66f17" />


# Contador React – Cotefácil

Este é um projeto simples em **React** que mostra um contador que pode ser aumentado manualmente ou automaticamente por meio de um cronômetro.

---

## Funcionalidades

- Incremento manual (+1 por clique)
- Cronômetro que aumenta o número automaticamente a cada 1 segundo
- Botão para iniciar/parar o cronômetro
- Número recebe estilização diferente quando é par

---

##  Como executar o projeto
### 1. Clone o projeto no git
```bash
git clone https://github.com/henrique-sobral/Desafio-tecnico-Cotefacil.git
```
### 2. Instale as dependências
```bash
npm install
```
### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```
### 4. Acesse o navegador
```bash
http://localhost:5173
```
### Breve visão técnica:
Foi extremamente necessário utilizar os hooks useState e useEffect para a conclusão do projeto.

**useState** → usado para guardar o número do contador e começar a contagem no 0. Sem ele, a tela não atualizaria quando o número mudasse.

**useEffect** → usado para fazer o cronômetro funcionar. Ele liga o intervalo quando o cronômetro começa e desliga quando para, fazendo o número subir sozinho a cada segundo.
