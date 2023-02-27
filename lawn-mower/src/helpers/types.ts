import { EAST, WEST, NORTH, SOUTH } from './constants';

export type Position = [number, number];
export type Direction = [typeof EAST, typeof WEST, typeof NORTH, typeof SOUTH][number];
export type Correspondance = { [key in Direction]: Direction }
