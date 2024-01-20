import cors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import Fastify from "fastify";

const fastify = Fastify();

await fastify.register(cors, {});
await fastify.register(fastifyEnv, {
  dotenv: true
});

fastify.get("/", (req, reply) => {
  reply.send({ hello: "world" });
});

await fastify.listen({ port: 3000 });
