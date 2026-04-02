# CLAUDE.md — microfrontend-shell

## Project Overview

Personal learning project and practical tool. This repo is the **shell/container** for a
microfrontend (MFE) architecture built with Webpack Module Federation. It renders a shared
Header and Sidebar, handles auth bootstrapping, and lazy-loads remote MFE apps into its router.

Current MFEs:
- `mfe-dashboard` — budgeting app
- `mfe-job-search` — tracks job applications and recruiters

Each MFE lives in its own repo. This shell is the only container. More MFEs will be added over time.

## Stack

- **React 18** + **TypeScript**
- **Webpack 5** with Module Federation (config base from `@bka-stuff/mfe-utils`)
- **React Router v7**
- **TanStack Query v5** (server state)
- **Zustand** (client state, via `@bka-stuff/mfe-utils`)
- **Tailwind v4** with `tw:` prefix (see CSS conventions below)
- **Axios** for HTTP
- **pnpm** (package manager — do not use npm or yarn)

## Key Package: `@bka-stuff/mfe-utils`

Installed from `github:Strangebrewer/mfe-utils#main`. This is the canonical source for anything
shared across MFEs:

- `useUserStore` — Zustand store for current user and auth-ready state (`isReady`, `clearUser`, etc.)
- Auth utilities
- Base webpack config
- Growing shared React component library

If something needs to be shared across MFEs, it belongs in `mfe-utils`, not duplicated here.

## Architecture Notes

### Adding a New MFE

1. Add a route entry in [src/utils/routeUtils.ts](src/utils/routeUtils.ts) using `buildLazyImports`
2. Add a module declaration in [src/types/remotes.d.ts](src/types/remotes.d.ts)
3. The new MFE must be running locally for the shell not to error out

### Routing & Lazy Loading

[src/utils/routeUtils.ts](src/utils/routeUtils.ts) implements a minimum-delay lazy load pattern to
prevent Suspense fallback flickering. Each route gets two lazy components — `normal` and `delayed`.
The `delayed` version is used only for the MFE that matches the initial page load URL; all others
use `normal`. Do not change this pattern without understanding the flicker problem it solves.

### Auth Flow

On mount, `Shell.tsx` checks for access/refresh tokens via `authClient`. If tokens exist, it fetches
the current user; otherwise it clears user state. The backend is a separate Go API that serves all
MFEs. Token management lives in [src/utils/authClient.ts](src/utils/authClient.ts).

## State Management

Use **Zustand only**. `useUserStore` is imported from `@bka-stuff/mfe-utils`.

> **Note:** Jotai is currently installed as a dependency but is unused. It should be removed.

## CSS Conventions

- **Always use the `tw:` prefix** for Tailwind classes (e.g. `tw:flex`, `tw:text-sm`)
- Use CSS files (e.g. [src/components/styles.css](src/components/styles.css)) when Tailwind class
  lists become unwieldy — this is a subjective call
- Never mix bare Tailwind classes with the prefixed form

## Dev Workflow

No automation is set up. Start everything manually in this order:

1. Start each MFE dev server (all must be running or the shell will error)
2. Start the shell: `pnpm start`

```
pnpm start     # webpack dev server
pnpm build     # production build
pnpm dev       # dev server + auto-open browser
```

All MFEs must be running before the shell starts, or Module Federation will throw on the missing remotes.

## Testing

No tests exist yet. The `test` script in `package.json` is a placeholder.
