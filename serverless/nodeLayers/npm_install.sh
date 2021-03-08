#!/bin/bash

path_root=$(pwd)

layers=(
    node10
)

for l in "${layers[@]}"
do    
    cd $path_root && cd $l    
    npm install
done