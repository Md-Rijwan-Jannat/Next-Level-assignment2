// variants interface
export interface IVariants {
  type: string;
  value: string;
}
// inventory interface
export interface IInventory {
  quantity: number;
  inStock: boolean;
}
// main product interface
export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariants[];
  inventory: IInventory;
}
