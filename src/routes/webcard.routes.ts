import { getAllWebCards } from "../webcard/presentation/webcard.controllers.js";

export const webcardRoutes = [
  {
    url: "/webcard",
    method: "GET",
    handler: getAllWebCards
  }
];
