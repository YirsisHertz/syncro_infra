import { z } from "zod";
import { DeleteWebCardDTO } from "../entities/webcard.entity.js";
import { WebCardRepository } from "../repositories/webcard.repository.js";

export class DeleteWebCardUseCase {
  constructor(private readonly webCardRepository: WebCardRepository) {}

  private validateDeleteWebCardDTO(webcardDTO: DeleteWebCardDTO) {
    const webcardSchema = z.object({
      id: z.string()
    });

    return webcardSchema.parse(webcardDTO);
  }

  execute(deleteWebCardDTO: DeleteWebCardDTO) {
    this.validateDeleteWebCardDTO(deleteWebCardDTO);

    return this.webCardRepository.delete(deleteWebCardDTO);
  }
}
