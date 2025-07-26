# Sonolus Level Packer

A lean and beautiful template for creating your own level packers.

The template is not usable out of the box, and is meant to be used by developers to create level packers for engines.

## Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Modify:

- `src/packer/options.ts` to add options required for packing levels.
- `src/App.vue` to add UI, and pass options to `pack()`.
- `src/packer/assets.ts` to add assets required for packing levels.
- `src/packer/engine.ts` to implement `packEngine`, where first argument contains options and assets.
- `src/packer/level.ts` to implement `packLevelData`, where first argument contains options and assets.
- `index.html` meta.
- `public/favicon.ico` and `public/thumbnail.png`.

## Deployment

Checks:

```bash
npm run check-type
npm run check-lint
npm run check-format
```

Build:

```bash
npm run build
```

Deploy `dist` content to a web server.
