#Install docker
``` 
sudo apt install docker.io 
``` 
#Install it as a service to start on boot
```
sudo systemctl start docker 
sudo systemctl enable docker
```

#verify docker version
```
docker --version
```

#Copy the simple-node code
#Run the command to create docker image
```
sudo docker build -t simple-node .
```
#list the created image 
```
sudo docker image ls
```
#run the locally created docker image
```
sudo docker run --rm -p 3000:3000 simple-node
```
