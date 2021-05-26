#FROM node:14.15-alpine3.13
FROM envoyproxy/envoy-alpine:v1.17-latest

WORKDIR /usr/src/app

RUN pwd && ls
COPY package*.json ./

RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/main/ nodejs=14.15.5-r0 npm && npm install

# Bundle app source
COPY . .

EXPOSE 8080

ADD .docker/service/start_service.sh /usr/local/bin/start_service.sh

RUN chmod u+x /usr/local/bin/start_service.sh

ENTRYPOINT ["/bin/sh", "/usr/local/bin/start_service.sh"]