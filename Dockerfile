FROM node:alpine

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk*

RUN apk add --no-cache tini

EXPOSE 8080

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]