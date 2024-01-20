FROM node:20.10.0-alpine

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]