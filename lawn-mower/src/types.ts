export type Position = [number, number];
export type Direction = 'E' | 'N' | 'W' | 'S';
export type Correspondance = { [key in Direction]: Direction }
