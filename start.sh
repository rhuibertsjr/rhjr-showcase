#!/bin/bash

./build.sh 

echo -e "=== Starting ======================================"
echo -e "firefox ./bin/showcase/index.html"
open -a /Applications/Firefox.app ./bin/showcase/index.html 
