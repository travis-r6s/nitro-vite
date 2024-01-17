# Nitro + Vite Minimal Starter

[Demo Site](https://brave-dune-045f79d0f.4.azurestaticapps.net)

A simple demo to show how Nitro + Vite can be used together as an MPA. This means you can have Nitro serve both your API (with routes under the `/routes/*` folder), and your SPA (code located in `/app`, and rendered by the `./renderer.ts` handler), and build this for any hosting platform.

I built this as a POC to see if I could create an MPA for Azure Static Web Apps - I wanted to create a Shopify app which had some middleware to check if the current user is authenticated on their first visit to `/`. With Nitro, I can run this middleware check, and a function either redirects to another API route `/login`, or renders the HTML for the index page, and the browser then loads the assets from the public directory.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.
