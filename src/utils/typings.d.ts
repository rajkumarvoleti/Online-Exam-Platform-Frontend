declare module 'annyang' {
  type StartCallback = () => void;
  type EndCallback = () => void;

  interface Annyang {
    start(options?: { autoRestart: boolean; continuous: boolean }): void;
    addCallback(event: 'start', callback: StartCallback): void;
    addCallback(event: 'end', callback: EndCallback): void;
  }

  const annyang: Annyang;

  export default annyang;
}
