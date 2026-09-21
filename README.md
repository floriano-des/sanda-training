# Sanda Training

Web app estático e responsivo para acompanhar a rotina semanal de treino, registrar séries, cargas, progresso e notas no próprio navegador.

## Executar localmente

O projeto não possui dependências nem etapa de compilação. Abra `index.html` diretamente ou sirva a pasta com um servidor HTTP simples:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

Os dados do usuário são mantidos no `localStorage` do navegador.

## Cloudflare Pages

Configuração recomendada para Git integration:

- Framework preset: `None`
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: deixar em branco

Após o primeiro deploy, adicione `treino.floriano.des.br` em **Custom domains** no projeto do Cloudflare Pages.

## Mídias

As demonstrações são armazenadas localmente em `assets/exercises`. Licenças e fontes estão documentadas em [CREDITS.md](CREDITS.md).

