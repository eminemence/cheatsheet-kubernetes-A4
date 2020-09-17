FROM node:10
#specify the dir inside image in which all commands will run
WORKDIR /usr/src/app
#copy package files & install dependencies
COPY package*.json ./
RUN npm install
#copy all app files to the image
COPY . .
#default command to run when the container starts
CMD [ "npm", "start" ]

