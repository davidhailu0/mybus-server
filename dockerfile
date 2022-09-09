FROM node:16.17-alpine3.15

RUN mkdir server

WORKDIR /server

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm","start"]