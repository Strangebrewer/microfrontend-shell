## Microfrontend gotchas (DO NOT FORGET)

- Shell tsconfig must use:
  - "module": "ESNext"
- ts-loader must explicitly point at that tsconfig
- Webpack config is ESM:
  - import webpack from "webpack"
  - define __dirname via import.meta.url
- NEVER use eager: true for react / react-dom
- Use bootstrap pattern
- publicPath must match dev-server port (or use "auto")
- Remotes must default-export a component for React.lazy
