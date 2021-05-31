FROM envoyproxy/envoy-alpine-dev:latest

RUN apk update && apk add npm bash curl
RUN mkdir /code
WORKDIR /code
COPY package*.json ./
RUN npm install
COPY . .
ADD .docker/service/start_service.sh /usr/local/bin/start_service.sh
RUN chmod u+x /usr/local/bin/start_service.sh
ENTRYPOINT ["/bin/sh", "/usr/local/bin/start_service.sh"]
