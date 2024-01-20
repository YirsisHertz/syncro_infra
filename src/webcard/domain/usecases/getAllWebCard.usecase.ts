import { WebCardRepository } from "../repositories/webcard.repository.js";

export class GetAllWebCardsUseCase {
  constructor(private readonly webCardRepository: WebCardRepository) {}

  execute() {
    return this.webCardRepository.findAll();
  }
}
