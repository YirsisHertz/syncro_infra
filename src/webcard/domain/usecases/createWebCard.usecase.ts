import { CreateWebCardDTO } from "../entities/webcard.entity.js";
import { WebCardRepository } from "../repositories/webcard.repository.js";

export class CreateWebCardUseCase {
  constructor(private readonly webCardRepository: WebCardRepository) {}

  execute(datasource: CreateWebCardDTO) {
    return this.webCardRepository.create(datasource);
  }
}
