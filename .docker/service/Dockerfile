FROM envoyproxy/envoy-alpine-dev:latest

RUN apk update && apk add npm bash curl && mkdir /code

WORKDIR /code
COPY src/challenge-infra/ .
ADD .docker/service/start_service.sh /usr/local/bin/start_service.sh

RUN npm install && chmod u+x /usr/local/bin/start_service.sh

ENTRYPOINT ["/bin/sh", "/usr/local/bin/start_service.sh"]
