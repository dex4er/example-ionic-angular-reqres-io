## Usage:
## $ yarn build:prod
## $ docker build -f docker/Dockerfile .

## Location of containers
ARG DOCKER_IO_REGISTRY=docker.io

## Versions
ARG CADDY_TAG=2.5.1-alpine

## This stage requires directory with artifacts which has to be **not** in .dockerignore

FROM ${DOCKER_IO_REGISTRY}/caddy:${CADDY_TAG} as image

## Copy the built artifacts
COPY ./www/ /srv/www/

## Configuration
COPY ./docker/Caddyfile /etc/caddy/

## Diagnostic
RUN caddy version

## The rest settings are taken from the base container
## ie. PORT 80
