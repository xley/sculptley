FROM node:12-alpine

WORKDIR /app/client

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]