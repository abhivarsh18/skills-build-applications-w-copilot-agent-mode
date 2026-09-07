# OctoFit Tracker frontend

The React presentation tier expects the backend API on port `8000`. In a
Codespace, define `VITE_CODESPACE_NAME` in `.env.local` with the Codespace
name, for example:

```env
VITE_CODESPACE_NAME=zany-adventure-xrvpg96wrx7wf69qv
```

Vite exposes variables prefixed with `VITE_` through `import.meta.env`. The
frontend builds API URLs as `https://${VITE_CODESPACE_NAME}-8000.app.github.dev`.
When `VITE_CODESPACE_NAME` is not defined, it safely falls back to
`http://localhost:8000` for local development.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
