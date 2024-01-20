import { CreateWebCardUseCase } from "../domain/usecases/createWebCard.usecase.js";
import { WebCardMongoModel } from "./../infrastructure/models/webcardMongo.model.js";

const webCardMongoModel = new WebCardMongoModel();

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const getAllWebCards = (request: any, reply: any) => {
  return { message: "ok" };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const createWebCards = async (request: any, reply: any) => {
  const body = request.body;

  const result = await new CreateWebCardUseCase(webCardMongoModel).execute({
    ...body
  });

  return {
    message: "ok",
    result,
    body
  };
};
