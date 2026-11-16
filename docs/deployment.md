# Deployment

The application runs as a Next.js standalone server in a multi-stage Docker image. The runtime uses an unprivileged user, listens on `0.0.0.0:3000`, and checks the homepage for container health. No application secrets are required.

## Local container

```sh
docker build -t in2bazar:local .
docker run --rm -p 3000:3000 in2bazar:local
```

## Dokploy

- Repository: `amirho1/in2bazar`, branch `main`.
- Build type: Dockerfile, with `Dockerfile` and the repository root as the build context.
- Route `in2.moftkhar.ir` to container port `3000`.
- Configure the Cloudflare DNS record to point to the Dokploy host.

For updates, push the tested commit and deploy the application from Dokploy. Verify the deployment status, container health, homepage, static images, and mobile interactions after each release.
