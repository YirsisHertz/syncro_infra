import { CreateWebCardUseCase } from "../domain/usecases/createWebCard.usecase.js";
import { DeleteWebCardUseCase } from "../domain/usecases/deleteWebCard.usecase.js";
import { GetAllWebCardsUseCase } from "../domain/usecases/getAllWebCard.usecase.js";
import { WebCardMongoModel } from "./../infrastructure/models/webcardMongo.model.js";

const webCardMongoModel = new WebCardMongoModel();

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const getAllWebCards = async (request: any, reply: any) => {
  const result = await new GetAllWebCardsUseCase(webCardMongoModel).execute();

  return { message: "ok", webcards: result };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const createWebCards = async (request: any, reply: any) => {
  const body = request.body;

  const result = await new CreateWebCardUseCase(webCardMongoModel).execute({
    ...body
  });

  return {
    message: "ok",
    webcard: result
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const deleteWebCards = async (request: any, reply: any) => {
  try {
    const { id } = request.params;

    const result = await new DeleteWebCardUseCase(webCardMongoModel).execute({
      id
    });

    return {
      message: "ok",
      webcard: result
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    reply.status(404);

    return {
      ok: false,
      message: error.message
    };
  }
};
