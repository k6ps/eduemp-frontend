FROM node:12-alpine

RUN apk update && apk upgrade

COPY . /app

WORKDIR /app

EXPOSE 5000

CMD npm install && npm run build && npm run start
