# Mendes & Ortega Advocacia — Site Institucional

Este repositório contém o código-fonte do site institucional do escritório de advocacia **Mendes & Ortega**, sediado em Cáceres/MT. O site foi projetado sob a estética **"Luxo Escuro/Noturno" (Dark Luxury)**, com o objetivo de transmitir autoridade, elegância, confiança e clareza.

---

## 🎨 Identidade Visual e Design

*   **Paleta de Cores**:
    *   Fundo Principal: Azul Noturno Ultra Escuro (`#0B131A`)
    *   Cards e Elementos: Azul Noturno Rico (`#111C27`)
    *   Destaques e Botões: Champagne / Dourado Fosco (`#C5A059` e `#D4AF37`)
    *   Texto Principal: Cinza Claro Azulado (`#E2E8F0`)
*   **Tipografia**:
    *   Títulos: *Playfair Display* (Serifada clássica para autoridade)
    *   Corpo: *Inter* (Sans-serif moderna para legibilidade)
*   **Diferenciais**: Animações suaves de transição de páginas e elevação de cards, cabeçalho translúcido com efeito de vidro (*glassmorphism*) e mapa interativo integrado.

---

## 📂 Estrutura de Páginas

1.  **Início (Home)**: Mensagem de impacto, cards de diferenciais (Ética, Atendimento Humanizado, Experiência Jurídica) e citação filosófica.
2.  **O Escritório (Sobre)**: Biografias profissionais detalhadas das advogadas **Dra. Luitt Conceição Ortega** e **Dra. Raquel Mendes dos Santos**, bem como a missão, visão e valores do escritório.
3.  **Áreas de Atuação**: Detalhamento das especialidades atendidas (Direito Civil, Família, Trabalho, Previdenciário, Imobiliário e Consumidor) com chamada para ação interativa.
4.  **Contato**: Formulário institucional de mensagem direta, informações completas de contato (Telefone, WhatsApp, E-mails oficiais) e mapa interativo do Google Maps com card flutuante de localização.

---

## 🛠️ Tecnologias Utilizadas

*   **Core**: React + TypeScript + Vite
*   **Roteamento**: `react-router-dom`
*   **Animações**: `framer-motion` (para transições suaves de carregamento de páginas)
*   **Ícones**: `lucide-react` + Vetores inline otimizados
*   **Estilização**: CSS Modules (Vanilla CSS para máxima performance e controle)

---

## 🚀 Execução Local

Para rodar e testar o projeto no seu computador, siga os passos abaixo:

1.  **Instalar dependências**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    *O site estará disponível por padrão no endereço local: [http://localhost:5173/](http://localhost:5173/)*

3.  **Compilar para produção (Build)**:
    ```bash
    npm run build
    ```
    *A pasta gerada `dist` estará pronta para ser enviada aos servidores de hospedagem.*

---

## 🌐 Deploy e Configuração de Domínio

O site está preparado para ser hospedado gratuitamente na **Vercel** ou **Netlify**, com arquivos de redirecionamento SPA inclusos (`vercel.json` e `_redirects`) e arquivo `CNAME` para o domínio próprio **`mendeseortega.adv.br`**.

### Apontamentos DNS Recomendados (Vercel):

*   **Entrada Tipo A** (Domínio Principal):
    *   Nome: `@` (ou vazio)
    *   Destino: `76.76.21.21`
*   **Entrada Tipo CNAME** (Subdomínio WWW):
    *   Nome: `www`
    *   Destino: `cname.vercel-dns.com.`
