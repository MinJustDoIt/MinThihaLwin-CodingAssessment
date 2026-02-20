FROM mcr.microsoft.com/devcontainers/python:1-3-bookworm

RUN apt-get update && apt-get install -y \
    git \
    sudo \
    zip \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir pytest black flake8 mypy

USER vscode
WORKDIR /workspaces/technical.assessment/python
