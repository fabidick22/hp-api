# High Performance API
## Requirements
- Envoy Proxy
- Node.js / Express
- Docker / Docker Compose
- jq

## Architecture Diagram
![architecture](./img/hp-architecture.jpg)

## Run and test
```shell
docker-compose up --build -d
# Check service
./scripts/rep.sh 
```
Scale service
```shell
docker-compose scale service1=4
```