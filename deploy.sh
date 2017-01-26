#!/usr/bin/env bash
npm run build && cat ./build/index.html > ./build/200.html && surge --domain ui-challenge.surge.sh ./build