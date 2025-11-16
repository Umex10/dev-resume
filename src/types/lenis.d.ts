import Lenis from "@studio-freight/lenis";

export {};

declare global {
  interface Window {
    lenis?: InstanceType<typeof Lenis>;
  }
}