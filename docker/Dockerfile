## Usage:
## $ npm run build:prod
## $ docker build -f docker/Dockerfile .

## This stage requires directory with artifacts which has to be **not** in .dockerignore

FROM caddy:2.5.1-alpine as image

## Copy the built artifacts
COPY ./www/ /srv/www/

## Configuration
COPY ./docker/Caddyfile /etc/caddy/

## Diagnostic
RUN caddy version

## The rest settings are taken from the base container
## ie. PORT 80
