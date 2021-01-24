FROM node:lts-alpine

WORKDIR /tmp/app

COPY . .

RUN npm install

RUN npm run build \
    && mv dist /app \
    && rm -R /tmp/app

WORKDIR /app

ENTRYPOINT ["node", "./src/main.js"]
