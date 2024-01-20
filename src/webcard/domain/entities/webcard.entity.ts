export interface WebCardColors {
  primary: string;
  secondary: string;
}

export interface WebCardModelEntity {
  id: string;
  active: boolean;
  name: string;
  image: string;
  url: string;
  primary_color: string;
  secondary_color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WebCardEntity {
  id: string;
  name: string;
  url: string;
  image: string;
  colors: WebCardColors;
}

export interface CreateWebCardDTO {
  name: string;
  url: string;
  image: string;
  primary_color: string;
  secondary_color: string;
}

export interface DeleteWebCardDTO {
  id: string;
}
