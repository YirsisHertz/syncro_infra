import {
  WebCardEntity,
  WebCardModelEntity
} from "../domain/entities/webcard.entity.js";

export const webcardModelToEntityAdapter = (
  document: WebCardModelEntity
): WebCardEntity => {
  return {
    id: document.id,
    name: document.name,
    image: document.image,
    url: document.url,
    colors: {
      primary: document.primary_color,
      secondary: document.secondary_color
    }
  };
};
