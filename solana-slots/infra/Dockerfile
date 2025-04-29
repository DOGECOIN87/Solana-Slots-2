# Use an Ubuntu 20.04 image which includes libssl1.1
FROM ubuntu:20.04

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install necessary dependencies:
# - curl, git, sudo: common tools
# - pkg-config, build-essential, libudev-dev: required for Solana program compilation
# - libssl1.1: the missing library
# - nodejs, npm: for installing Anchor CLI and other JS tools
# - python3, python3-pip: for Anchor's Python dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    git \
    sudo \
    pkg-config \
    build-essential \
    libudev-dev \
    libssl1.1 \
    nodejs \
    npm \
    python3 \
    python3-pip && \
    rm -rf /var/lib/apt/lists/*

# Install Solana CLI
RUN sh -c "$(curl -sSfL https://release.solana.com/v1.18.4/install)"

# Install Anchor CLI using Anchor Version Manager (AVM)
RUN apt-get update && \
    curl -sSf https://sh.rustup.rs | sh -s -- -y && \
    . "$HOME/.cargo/env" && \
    cargo install --git https://github.com/coral-xyz/anchor avm --locked && \
    avm install 0.30.1 && \
    avm use 0.30.1

# Set a working directory
WORKDIR /workspace

# Command to run when the container starts (optional, can be overridden)
CMD ["bash"]
