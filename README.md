# ElineFarias.github.io

Portfólio pessoal — React + Vite, publicado no GitHub Pages via GitHub Actions.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

## Editar conteúdo

Todo o texto (PT/EN), skills, experiências e projetos ficam em `src/data.js`.
Imagens e currículo ficam em `public/`.

## Deploy

Todo push na branch `main` dispara `.github/workflows/deploy.yml`.
Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
