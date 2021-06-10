#!/bin/sh
DEBUG=express:* node index.js &
envoy -c /etc/service-envoy.yaml --service-cluster "service${SERVICE_NAME}"
