#!/bin/bash
# This is buildpack-run.sh
echo "In buildpack-run.sh"
node ./scripts/createVersion.js > src/version.js
echo $?
find . -ls
cat src/version.js
