#!/bin/bash

# ./deploy.sh dev 'us-east-1'

STAGE=$1
REGION=$2

echo "Deploy to stage $STAGE"
echo "Deploy to region $REGION"

# Deploy of all services
services=(
    nodeLayers
    hello
)

path_root=$(pwd)

if [[ ! $STAGE == "" ]]; then
    if [[ ! $REGION == "" ]]; then
        # Deploy of all services
        for s in "${services[@]}"
        do
            echo "------------------------------------$s service------------------------------------"
            cd $path_root && cd serverless/$s/
            if [[ $s == "nodeLayers" ]]; then            
                ./npm_install.sh
            fi    
            sls deploy --stage $STAGE --region $REGION
        done
    else
        echo "No stage provider"
    fi    
else
    echo "No profile provider"
fi