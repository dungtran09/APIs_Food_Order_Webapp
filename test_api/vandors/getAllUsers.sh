curl \
-X GET \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/vandor" \
-o ./data/log.json && cat ./data/log.json | jq
