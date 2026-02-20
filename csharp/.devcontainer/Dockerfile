FROM mcr.microsoft.com/devcontainers/dotnet:8.0-bookworm

RUN apt-get update && apt-get install -y \
    git \
    sudo \
    zip \
    && rm -rf /var/lib/apt/lists/* \
    dotnet workload update


USER vscode
WORKDIR /workspaces/technical.assessment/csharp
