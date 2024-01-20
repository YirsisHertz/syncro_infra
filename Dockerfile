FROM node:20.10.0-alpine

WORKDIR /app

COPY . .

RUN npm i -g pnpm
RUN pnpm i

RUN pnpm build

ENV PORT=3000
ENV FASTIFY_ADDRESS=0.0.0.0

EXPOSE 3000

CMD [ "pnpm", "start" ]