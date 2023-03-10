# SvelteKit PNPM Monorepo TS Errors Reproduction

Created as a tiny-repro to which I will link from a StackOverflow question I'll be posting.

## Steps I followed to create this repro:

1. mkdir example
1. cd example
1. pnpm init
1. update package.json changing name to `@example/root`
1. mkdir `packages/app`
1. mkdir `packages/pkg`
1. create pnpm-workspace.yaml
1. cd `packages/pkg`
1. pnpm init
1. pnpm add @redis/client
1. pnpm add -D typescript tsup
1. update package.json changing name to `@example/pkg`, remove `main` key, add `type=module`, `exports`, and `types`. Add some useful scripts.
1. create `packages/pkg/index.ts` (content visible in repo^)
1. pnpm tsc --init
1. pnpm run build (no errors, generated files seem reasonable.)
1. cd `../app`
1. `npm create svelte@latest .` //suggested by https://kit.svelte.dev
	1. use current directory
	1. skeleton project
	1. use TS syntax
	1. no eslint, prettier, playwright, or vitest since they're not necessary for repro
1. update package.json changing name to `@example/app`
1. manually add pnpm workspace dependency to package.json: `"@example/pkg": "workspace:^"`
1. pnpm install
1. create `packages/app/src/routes/+page.server.ts` (content visible in repo^)
1. cd `packages/app` && pnpm run dev
1. navigate to http://localhost:5173/
1. Note that the same error appears: **Internal server error: exports is not defined**
1. git init
1. echo "node_modules" > .gitignore
1. git add .
1. git commit
