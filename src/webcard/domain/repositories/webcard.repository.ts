import { CreateWebCardDTO, WebCardEntity } from "../entities/webcard.entity.js";

export abstract class WebCardRepository {
  abstract findAll(): Promise<WebCardEntity[]>;
  abstract create(webcard: CreateWebCardDTO): Promise<WebCardEntity>;
  abstract delete(): Promise<WebCardEntity>;
}
