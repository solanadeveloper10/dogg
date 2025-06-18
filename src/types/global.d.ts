declare module 'https://cdn.skypack.dev/tweakpane@4.0.4' {
  export class Pane {
    constructor(options: any);
    addBinding(config: any, property: string, options: any): any;
    on(event: string, callback: (event: any) => void): void;
    dispose(): void;
  }
}

declare module 'https://cdn.skypack.dev/gsap@3.12.0' {
  const gsap: any;
  export default gsap;
}

declare module 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger' {
  const ScrollTrigger: any;
  export default ScrollTrigger;
} 