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

### 1. Instale as dependências
```bash
npm install
```
### 2. Inicie o servidor de desenvolvimento
```bash
npm run dev
```
### 3. Acesse o navegador
```bash
http://localhost:5173
```
### Breve visão técnica:
Foi extremamente necessário utilizar os hooks useState e useEffect para a conclusão do projeto.

**useState** → usado para guardar o número do contador e começar a contagem no 0. Sem ele, a tela não atualizaria quando o número mudasse.

**useEffect** → usado para fazer o cronômetro funcionar. Ele liga o intervalo quando o cronômetro começa e desliga quando para, fazendo o número subir sozinho a cada segundo.
