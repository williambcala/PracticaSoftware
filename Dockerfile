#aqui voy a crear mi backend del contenedor con el sistema Op

FROM node:18-alpine
WORKDIR /usr/app

COPY index.mjs .
COPY package.json .
COPY package.lock.json .
#agregar carpeta src a contenedor
COPY /src ./src/ 

ENV MONGO_URI mongodb+srv://williamBanguera:I6DCgwVkEM7c9vPs@cluster0.mipqcmk.mongodb.net/?retryWrites=true&w=majority
ENV PORT 5001
ENV MINIO_HOST http://minio:9000
ENV MINIO_ACCESS_KEY root 
ENV MINIO_SECRET_KEY root1234

EXPOSE 5001

RUN npm install --production   
#entra comando de ejecución
ENTRYPOINT ["npm","start"]
