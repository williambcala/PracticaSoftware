#aqui voy a crear mi backend del contenedor con el sistema Op

FROM node:18-alpine
WORKDIR /usr/app

COPY index.mjs .
COPY package.json .
COPY package.lock.json .
#agregar carpeta src a contenedor
COPY /src ./src/ 

ENV PORT 5001
EXPOSE 5001 

RUN npm install --production   
#entra comando de ejecución
ENTRYPOINT ["npm","start"]
