#!/usr/bin/env sh

sticker=$(rmpc sticker get "$FILE" "playCount" | jq -r '.value')
if [ -z "$sticker" ]; then
    rmpc sticker set "$FILE" "playCount" "1"
else
    rmpc sticker set "$FILE" "playCount" "$((sticker + 1))"
fi
