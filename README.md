# 🎨 Fundo Mágico

Um gerador de **backgrounds CSS animados** potenciado por IA. Descreva o background que você imagina e deixe a magia acontecer!

![Tecnologias](https://img.shields.io/badge/HTML-E34C26?style=flat&logo=html5&logoColor=white)
![Tecnologias](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![Tecnologias](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tecnologias](https://img.shields.io/badge/n8n-000000?style=flat&logo=n8n&logoColor=white)
![Tecnologias](https://img.shields.io/badge/Google%20Gemini-EA4335?style=flat&logo=google&logoColor=white)

## ✨ Funcionalidades

- 🤖 **Geração com IA**: Utiliza Google Gemini para gerar backgrounds CSS criativos
- 🎯 **Interface Intuitiva**: Design moderno e responsivo
- 📋 **Código Copiável**: Exibe HTML e CSS prontos para usar
- 👁️ **Preview em Tempo Real**: Visualize o background antes de copiar
- 📱 **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktops

## 🚀 Como Usar

1. **Digite sua descrição**: Escreva uma descrição do background desejado
    - Exemplos: "um gradiente azul suave", "padrão de ondas coloridas", "fundo com estrelas animadas"
2. **Clique em "Gerar Background"**: A IA irá processar sua descrição
3. **Visualize e Copie**: Veja o resultado e copie o código HTML e CSS

## 🛠️ Tecnologias

- **Frontend**:
    - HTML5
    - CSS3 (com animações e gradientes)
    - JavaScript (Vanilla)
    - Google Fonts (Roboto Mono)

- **Backend**:
    - n8n (automação e orquestração)
    - Google Gemini AI (geração de conteúdo)
    - Webhook para integração

## 📁 Estrutura do Projeto

```
fundo-magico/
├── index.html              # Página principal
├── workflow-n8n.json       # Configuração do workflow n8n
└── src/
    ├── css/
    │   ├── reset.css       # Reset de estilos padrão
    │   ├── style.css       # Estilos principais
    │   └── responsive.css  # Media queries e responsividade
    ├── js/
    │   └── index.js        # Lógica da aplicação
    └── images/
        └── bg.jpg          # Background da página
```

## ⚙️ Configuração

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexão com a internet

### Instalação Local

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/fundo-magico.git
cd fundo-magico
```

2. Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

3. Acesse em `http://localhost:8000`

### Configurar o Backend (n8n)

1. Importe o arquivo `workflow-n8n.json` em sua instância n8n
2. Configure as credenciais do Google Gemini:
    - Obtenha uma chave API em [Google AI Studio](https://aistudio.google.com)
    - Adicione a credencial ao webhook
3. Atualize a URL do webhook no arquivo `src/js/index.js` linha 21:

```javascript
const response = await fetch("sua-url-n8n-webhook", {
```

## 🎯 Como Funciona

1. **Entrada do Usuário**: O usuário descreve o background desejado
2. **Envio para n8n**: A descrição é enviada via POST para o webhook
3. **Processamento com IA**: Google Gemini gera código CSS e HTML
4. **Resposta**: O código é retornado e exibido na interface
5. **Preview**: O HTML e CSS são aplicados dinamicamente na página

## 💡 Exemplos de Descrição

- "Um gradiente lilás, azul e magenta com animação suave"
- "Fundo com padrão de ondas em tons de verde e azul"
- "Animação de partículas coloridas em movimento"
- "Gradiente do roxo ao rosa com efeito de pulso"

## 🌐 Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

Conecte o repositório ao Netlify pelo painel de controle

### GitHub Pages

1. Vá em Settings → Pages
2. Selecione a branch main
3. Clique em Save

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 👨‍💻 Autor

Desenvolvido como parte do **Curso DevQuest**

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novas funcionalidades
- Fazer pull requests

## 📞 Suporte

Para suporte, abra uma [issue](https://github.com/seu-usuario/fundo-magico/issues) no repositório.

---

**Transforme suas ideias em backgrounds incríveis com o poder da IA! ✨**
