# Mendonça Psicoterapia

Website profissional para psicoterapeuta e curador energético, desenvolvido com Next.js e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod

## Funcionalidades

- Design responsivo e moderno
- Páginas informativas sobre serviços
- Blog com artigos sobre bem-estar
- Formulário de contato
- Integração com redes sociais
- SEO otimizado

## Estrutura do Projeto

```
src/
  ├── app/              # Páginas da aplicação
  ├── components/       # Componentes reutilizáveis
  ├── styles/          # Estilos globais
  └── types/           # Definições de tipos TypeScript
```

## Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Deploy

O projeto está configurado para deploy na Vercel. Basta conectar o repositório e as configurações serão aplicadas automaticamente.

## Imagens

As imagens utilizadas no projeto devem ser adicionadas na pasta `public/images/` com a seguinte estrutura:

```
public/
  ├── images/
  │   ├── hero-bg.jpg
  │   ├── about.jpg
  │   ├── psychotherapy.jpg
  │   ├── energy-healing.jpg
  │   ├── online-session.jpg
  │   └── blog/
  │       ├── meditation.jpg
  │       ├── anxiety.jpg
  │       └── energy-healing.jpg
```

## Personalização

Para personalizar o site:

1. Atualize as informações de contato em `src/app/contato/page.tsx`
2. Modifique os textos e imagens nas páginas
3. Ajuste as cores no arquivo `tailwind.config.js`
4. Adicione ou remova serviços em `src/app/servicos/page.tsx`

## Licença

Este projeto é privado e não pode ser utilizado sem autorização. 