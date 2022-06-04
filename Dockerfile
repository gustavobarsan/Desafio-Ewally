FROM node:14
EXPOSE 8080
WORKDIR /src
COPY package*.json ./
RUN npm install --only=prod
COPY . ./
CMD NODE_URLS=http://*:PORT npm start