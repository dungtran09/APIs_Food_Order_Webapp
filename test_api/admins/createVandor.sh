curl \
-X POST \
-d @./data/create.json \
-H "Content-Type: application/json" "$(cat ../config/URL.txt)/admin/vandor" \
-o ./data/log.json && cat ./data/log.json | jq
