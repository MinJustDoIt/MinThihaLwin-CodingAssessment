FROM mcr.microsoft.com/devcontainers/ruby:1-3.4-bullseye

RUN apt-get update && apt-get install -y \
    git \
    sudo \
    zip \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler rspec rubocop

USER vscode
WORKDIR /workspaces/technical.assessment/ruby