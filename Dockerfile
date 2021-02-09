FROM node:14.15.4-alpine

WORKDIR /usr/src/api

COPY package*.json ./
RUN npm ci --only-production

# This way we can call mpm start
COPY server ./server

CMD [ "npm", "start" ]