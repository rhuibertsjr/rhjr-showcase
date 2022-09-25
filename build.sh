#!/bin/bash

echo -e "=== Building ======================================"
echo -e "tsc -p ./config/.tsconfig.json\n"
tsc -p ./config/.tsconfig.json 


echo -e "=== Moving ========================================"
echo -e "cp ./public/index.html ./bin/showcase/\n"
cp ./public/index.html ./bin/showcase/

