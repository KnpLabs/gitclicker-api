export interface BaseItem {
  name: string;
  price: number;
  multiplier: number;
}

export interface Item extends BaseItem {
  id: number;
}
