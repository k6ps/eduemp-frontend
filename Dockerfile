FROM node:12-alpine

RUN apk update && apk upgrade

WORKDIR /app

VOLUME /app

EXPOSE 5000

CMD npm run build && npm run start
