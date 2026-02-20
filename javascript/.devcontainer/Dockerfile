FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

RUN apt-get update && apt-get install -y \
    git \
    sudo \
    zip \
    && rm -rf /var/lib/apt/lists/*

USER node
WORKDIR /workspaces/technical.assessment/javascript