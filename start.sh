#! /bin/bash

./stop.sh
sudo docker rmi recipes
sudo docker build -t recipes .
sudo docker run -it --name recipes -p 1965:1965 recipes

