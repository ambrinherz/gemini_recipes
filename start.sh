#! /bin/bash

./stop.sh
sudo docker rmi gemini
sudo docker build -t gemini .
sudo docker run -it --name gemc -p 1965:1965 gemini

