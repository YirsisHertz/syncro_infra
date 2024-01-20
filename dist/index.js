import e from "@fastify/cors";
import r from "@fastify/env";
import t from "fastify";
import { routes as o } from "./routes/index.js";
var i = t({ logger: !0 });
await i.register(e),
  await i.register(r, {
    dotenv: !0,
    schema: {
      type: "object",
      required: ["PORT"],
      properties: { PORT: { type: "string", default: 3e3 } }
    }
  }),
  i.get("/healt", function () {
    return { message: "Ok" };
  }),
  o.forEach(function (e) {
    return i.route(e);
  }),
  await i.listen({ port: +(process.env.PORT || 3e3) });
