import { z } from "zod";
import { CreateWebCardDTO } from "../entities/webcard.entity.js";
import { WebCardRepository } from "../repositories/webcard.repository.js";

export class CreateWebCardUseCase {
  constructor(private readonly webCardRepository: WebCardRepository) {}

  private validateCreateWebCardDTO(webcardDTO: CreateWebCardDTO) {
    const webcardSchema = z.object({
      name: z.string(),
      image: z.string().url(),
      url: z.string().url(),
      primary_color: z.string(),
      secondary_color: z.string()
    });

    return webcardSchema.parse(webcardDTO);
  }

  execute(datasource: CreateWebCardDTO) {
    this.validateCreateWebCardDTO(datasource);

    return this.webCardRepository.create(datasource);
  }
}
