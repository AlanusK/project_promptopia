import { Types } from "mongoose";

export interface PromptType {
  prompt: string;
  tag: string;
  _id?: string;
  creator?: Types.Object;
}

export interface ProfileType {
  name: string;
  desc: string;
  data: array<PromptType>;
  handleEdit?: MouseEventHandler<HTMLParagraphElement>;
  handleDelete?: MouseEventHandler<HTMLParagraphElement>;
}

export type ParamsType = {
  params: {
    id: string;
  };
};
