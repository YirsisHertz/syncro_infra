import { Schema, model } from "mongoose";
import { webcardModelToEntityAdapter } from "../../adapters/webcardModel.adapter.js";
import {
  CreateWebCardDTO,
  WebCardEntity,
  WebCardModelEntity
} from "../../domain/entities/webcard.entity.js";
import { WebCardRepository } from "../../domain/repositories/webcard.repository.js";

const WebCardModel = model<WebCardModelEntity>(
  "web_card",
  new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    url: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true,
      trim: true
    },
    primary_color: {
      type: String,
      required: true,
      trim: true
    },
    secondary_color: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  })
);

export class WebCardMongoModel extends WebCardRepository {
  findAll(): Promise<WebCardEntity[]> {
    throw new Error("Method not implemented.");
  }

  async create(webcard: CreateWebCardDTO): Promise<WebCardEntity> {
    const newWebCard = new WebCardModel(webcard);

    // await newWebCard.save();

    const data = webcardModelToEntityAdapter(newWebCard);

    return { ...data };
  }

  delete(): Promise<WebCardEntity> {
    throw new Error("Method not implemented.");
  }
}
