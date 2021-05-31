while true; do
    printf "\n"
    curl -sb -H "Accept: application/json" "http://localhost:8080/service/hp-api" | jq '.'
    sleep 2
done
