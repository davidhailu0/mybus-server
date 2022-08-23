FROM node:16.17-alpine3.15

WORKDIR /server

COPY ./package.json ./package-lock.json /

RUN npm install

COPY . .

CMD ["npm","start"]