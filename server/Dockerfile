FROM node:19.9.0-slim

WORKDIR /app

COPY . /app

RUN npm ci

EXPOSE 5000

CMD [ "npm", "run", "start" ]