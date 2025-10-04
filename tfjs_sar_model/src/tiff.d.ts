// tiff.d.ts - Type declarations for tiff.js library
declare class Tiff {
  constructor(options: { buffer: ArrayBuffer });
  width(): number;
  height(): number;
  toCanvas(): HTMLCanvasElement;
}

declare const Tiff: {
  new(options: { buffer: ArrayBuffer }): Tiff;
};

export = Tiff;