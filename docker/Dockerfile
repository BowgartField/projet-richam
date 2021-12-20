FROM node:17-alpine

ENV PORT 3000

#Creatd directory in container and copy inside app from host
RUN mkdir -p /usr/src/app
COPY ../website /usr/src/app

#Install dependencies
WORKDIR /usr/src/app
RUN npm install

#Build the next.js app
RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"
