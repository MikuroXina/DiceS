export interface Dice {
  quantity: number;
  faces: number;
}

export interface NormalizedRng {
  (): number;
}

export const roll = (
  { quantity, faces }: Readonly<Dice>,
  rng: NormalizedRng,
): number[] =>
  [...new Array(quantity)].map(() => Math.floor(rng() * faces + 1));
