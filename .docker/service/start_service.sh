#!/bin/sh
node app.js &
envoy -c /etc/service-envoy.yaml --service-cluster "service${SERVICE_NAME}"