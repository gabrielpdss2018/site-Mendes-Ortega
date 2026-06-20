# Documento de Design: Mendes & Ortega Advocacia

## 1. Visão Geral
Criação de um site moderno, elegante e minimalista para o escritório de advocacia **Mendes & Ortega**, focado em transmitir autoridade, clareza e confiança. O site será multi-página para garantir uma leitura organizada e evitar excesso de informação em uma única tela.

## 2. Arquitetura de Informação (Multi-Página)

### Página 1: Início (Home)
*   **Hero Section:** Frase de impacto (ex: "Excelência jurídica com proximidade e transparência") + Botão de Chamada para Ação (Agendar Consulta via WhatsApp).
*   **Resumo de Especialidades:** Cards minimalistas com as 3 ou 4 principais áreas.
*   **Diferenciais:** 3 pontos curtos (ex: Atendimento Personalizado, Expertise Regional, Ética).
*   **Citação/Missão:** Una frase que defina o compromisso das Dras. Luitt e Raquel.

### Página 2: O Escritório (Sobre Nós)
*   **História:** Breve texto sobre a fundação e valores.
*   **Perfis Profissionais:**
    *   **Dra. Luitt Conceição Ortega:** OAB/MT 10717 (Foto, breve bio, especialidades).
    *   **Dra. Raquel Mendes dos Santos:** OAB/MT 13.063 (Foto, breve bio, especialidades).
*   **Localização:** Foto do escritório físico (opcional) e descrição da infraestrutura.

### Página 3: Áreas de Atuação
*   Lista detalhada das especialidades jurídicas.
*   Breve explicação de como o escritório pode ajudar em cada área (ex: Direito Civil, Família, Trabalhista, etc.).

### Página 4: Contato
*   Formulário de contato simples (Nome, E-mail, Assunto, Mensagem).
*   Informações diretas: Telefone (65) 99636-8263, E-mails profissionais.
*   Endereço clicável (Google Maps): Rua Seis de Outubro, 677, Cáceres/MT.

---

## 3. Identidade Visual e Design

### Paleta de Cores (Sugestão "Moderno de Luxo")
*   **Primária:** Azul Noturno (#1A2B3C) - Transmite seriedade e confiança.
*   **Destaque:** Champagne ou Dourado Fosco (#C5A059) - Transmite prestígio e detalhismo.
*   **Fundo:** Off-White (#F9F9F9) - Facilita a leitura e traz leveza.
*   **Texto:** Grafite Escuro (#333333) - Melhor contraste para leitura prolongada.

### Tipografia
*   **Títulos:** *Playfair Display* (Serifada) - Elegância e autoridade clássica.
*   **Corpo de Texto:** *Inter* ou *Montserrat* (Sans-serif) - Clareza moderna e legibilidade em telas pequenas.

### Elementos Visuais
*   **Espaçamento (White Space):** Margens amplas para que o conteúdo "respire".
*   **Micro-interações:** Transições suaves de opacidade ao carregar as seções.
*   **Layout Editorial:** Uso de grades assimétricas sutis para fugir do aspecto de "site pronto".

---

## 4. Stack Tecnológica
*   **Frontend:** React (Vite) + TypeScript.
*   **Estilização:** Vanilla CSS (CSS Modules ou variáveis globais) para máxima performance.
*   **Ícones:** Lucide React (simples e elegantes).
*   **Animações:** CSS Transitions / Framer Motion (opcional para suavidade).

## 5. Próximos Passos
1.  Aprovação deste Plano pelo Usuário.
2.  Configuração do ambiente React + Vite.
3.  Desenvolvimento do sistema de rotas (React Router).
4.  Implementação da Home Page.
5.  Implementação das demais páginas.
6.  Otimização Mobile.
