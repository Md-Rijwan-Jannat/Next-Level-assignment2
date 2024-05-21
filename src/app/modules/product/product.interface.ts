export interface IVariants {
  type: string;
  value: string;
}

export interface IInventory {
  quantity: number;
  inStock: boolean;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariants[];
  inventory: IInventory;
}

// {
//     "name": "iPhone 13",
//     "description": "A sleek and powerful smartphone with cutting-edge features.",
//     "price": 999,
//     "category": "Electronics",
//     "tags": ["smartphone", "Apple", "iOS"],
//     "variants": [
//         {
//             "type": "Color",
//             "value": "Midnight Blue"
//         },
//         {
//             "type": "Storage Capacity",
//             "value": "256GB"
//         }
//     ],
//     "inventory": {
//         "quantity": 50,
//         "inStock": true
//     }
// }
