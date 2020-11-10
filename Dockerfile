FROM node:alpine

USER node

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]
