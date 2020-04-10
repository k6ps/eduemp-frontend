FROM node:12-alpine

RUN apk update && apk upgrade

WORKDIR /app

VOLUME /app

EXPOSE 5000

CMD npm install && npm run build && npm run start
