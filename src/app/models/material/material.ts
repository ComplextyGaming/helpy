import { Expert } from "../expert/expert";
import { Tag } from "../tag/tag";

export interface Material {
  id: number,
  description: string,
  cost: number,
  discount: number,
  tags: Tag[],
  expert: Expert
}
