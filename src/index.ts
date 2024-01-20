import cors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import Fastify from "fastify";

import mongoose from "mongoose";

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

mongoose
  .connect(process.env.DATABASE_URL || "", {
    user: process.env.DATABASE_USERNAME,
    pass: process.env.DATABASE_PASSWORD
  })
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));
