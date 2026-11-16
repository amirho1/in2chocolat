# Deployment

The application runs as a Next.js standalone server in a multi-stage Docker image. The runtime uses an unprivileged user, listens on `0.0.0.0:3000`, and checks the homepage for container health. No application secrets are required.

## Local container

```sh
docker build -t in2chocolat:local .
docker run --rm -p 3000:3000 in2chocolat:local
```

## Dokploy

- Repository: `amirho1/in2chocolat`, branch `main`.
- Build type: Dockerfile, with `Dockerfile` and the repository root as the build context.
- Route `in2chocolate.moftkhar.ir` to container port `3000`.
- Configure the Cloudflare DNS record to point to the Dokploy host.

For updates, push the tested commit and deploy the application from Dokploy. Verify the deployment status, container health, homepage, static images, and mobile interactions after each release.

## Source and scope

Cloned from `amirho1/in2bazar` at `6d8ea3502a00b79dfcb7f58c8fd149283ffc6c22`. This independent repository uses the verified teal and mint palette, logo, imagery, category links and product snapshot from https://in2chocolate.com/ on 2026-11-16. Purchases, account, search and cart continue on the original Chocolate store.

Dokploy application: `e-By7PvVGFIGMOu5RHNa7` (`in2chocolate-web-vkqtna`). The Cloudflare A record for `in2chocolate.moftkhar.ir` points to `109.122.246.30` with proxying enabled.
