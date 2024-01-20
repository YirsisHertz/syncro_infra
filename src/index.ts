import cors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import Fastify from "fastify";
import { routes } from "./routes/index.js";

const fastify = Fastify({
  logger: true
});

const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 3000
    }
  }
};

await fastify.register(cors);
await fastify.register(fastifyEnv, {
  dotenv: true,
  schema
});

fastify.get("/healt", () => {
  return {
    message: "Ok"
  };
});

routes.forEach((route) => fastify.route(route));

await fastify.listen({ port: +(process.env.PORT || 3000) });
