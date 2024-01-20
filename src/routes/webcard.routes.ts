import { HTTPMethods } from "fastify";
import {
  createWebCards,
  deleteWebCards,
  getAllWebCards
} from "../webcard/presentation/webcard.controllers.js";

export const webcardRoutes = [
  {
    url: "/webcard",
    method: "GET" as HTTPMethods,
    handler: getAllWebCards
  },
  {
    url: "/webcard",
    method: "POST" as HTTPMethods,
    handler: createWebCards
  },
  {
    url: "/webcard/:id",
    method: "DELETE" as HTTPMethods,
    handler: deleteWebCards
  }
];
