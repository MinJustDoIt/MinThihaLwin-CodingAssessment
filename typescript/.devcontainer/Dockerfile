FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

RUN apt-get update && apt-get install -y \
    git \
    sudo \
    zip \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g typescript ts-node

USER node
WORKDIR /workspaces/technical.assessment/typescript