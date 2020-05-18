type THandler = (x: number, y: number) => void;

const handlers = new Map();

// TODO: FINISH THIS

export const useMouseMove = (handlerId: string, handler: THandler, unregister = false): void => {
  if (unregister) {
    const cbHandler = handlers.get(handlerId);
    if (cbHandler) {
      window.removeEventListener('mousemove', cbHandler);
    }
  } else {
    const cbHandler = (event: MouseEvent): void => {
      const {pageX, pageY} = event;
      handler(pageX, pageY);
    };

    handlers.set(handlerId, cbHandler);

    window.addEventListener('mousemove', cbHandler);
  }
};
