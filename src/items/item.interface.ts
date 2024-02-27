export interface BaseItem {
  name: string;
  price: number;
  linesPerMillisecond: number;
}

export interface Item extends BaseItem {
  id: number;
}
