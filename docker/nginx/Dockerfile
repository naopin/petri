FROM --platform=linux/x86_64 node:16-alpine as node
FROM --platform=linux/x86_64 nginx:1.20-alpine
SHELL ["/bin/ash", "-oeux", "pipefail", "-c"]

ENV TZ=Asia/Tokyo

RUN apk update && \
  apk add --update --no-cache --virtual=.build-dependencies g++

# node command
COPY --from=node /usr/local/bin /usr/local/bin
# npm command
COPY --from=node /usr/local/lib /usr/local/lib
# yarn command
COPY --from=node /opt /opt
# nginx config file will be output to /etc/nginx/conf.d/ by envsubst
# COPY ./.docker/nginx/conf/*.conf /etc/nginx/conf.d/
COPY ./default.conf /etc/nginx/templates/default.conf


WORKDIR /work


