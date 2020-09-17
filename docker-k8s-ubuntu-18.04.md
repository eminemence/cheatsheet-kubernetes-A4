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
# Create the simple-node files in the following order
```
package.json
server.js
.dockerignore
Dockerfile
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
# Got this error on running above command
```

> simple-node@1.0.0 start /usr/src/app
> node server.js

internal/modules/cjs/loader.js:638
    throw err;
    ^

Error: Cannot find module 'express'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at Object.<anonymous> (/usr/src/app/server.js:1:15)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! simple-node@1.0.0 start: `node server.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the simple-node@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-09-17T08_16_14_581Z-debug.log

```
