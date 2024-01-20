import { Schema, model } from "mongoose";
import { webcardModelToEntityAdapter } from "../../adapters/webcardModel.adapter.js";
import {
  CreateWebCardDTO,
  DeleteWebCardDTO,
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
    },
    active: {
      type: Boolean,
      default: true
    }
  })
);

export class WebCardMongoModel extends WebCardRepository {
  async findAll(): Promise<WebCardEntity[]> {
    const webcardList: WebCardEntity[] = (
      await WebCardModel.find({
        active: true
      })
    ).map((doc) => webcardModelToEntityAdapter(doc));

    return webcardList;
  }

  async create(webcardDTO: CreateWebCardDTO): Promise<WebCardEntity> {
    const newWebCard = new WebCardModel(webcardDTO);
    await newWebCard.save();

    const data = webcardModelToEntityAdapter(newWebCard);

    return { ...data };
  }

  async delete(webcardDTO: DeleteWebCardDTO): Promise<WebCardEntity> {
    const { id } = webcardDTO;
    const updateWebCard =
      await WebCardModel.findByIdAndUpdate<WebCardModelEntity>(
        id,
        {
          active: false
        },
        {
          new: true
        }
      );

    if (!updateWebCard) {
      throw new Error("WebCard not exist");
    }

    const data = webcardModelToEntityAdapter(updateWebCard);

    return { ...data };
  }
}
