export const delay = (timeMs: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeMs);
  });
};

type OperationType = 'd' | 's';

type OperationMeta =
  | number
  | Record<string, string>;

interface Operation {
  type: OperationType;
  meta: OperationMeta;
}

export class SequenceAnimation<T extends HTMLElement> {
  private ref: React.RefObject<T>;

  private operations: Operation[];


  public constructor(ref: React.RefObject<T>) {
    this.ref = ref;
    this.operations = [];
  }

  private pushOperation = (type: OperationType, meta: OperationMeta): void => {
    this.operations.push({
      type,
      meta,
    });
  }

  private popOperation = (): Operation | undefined => {
    return this.operations.pop();
  }

  public delay = (timeMs: number): SequenceAnimation<T> => {
    this.pushOperation('d', timeMs);
    return this;
  }

  public style = (key: string, value: string): SequenceAnimation<T> => {
    this.pushOperation('s', {
      [key]: value,
    });
    return this;
  }

  public apply = async (): Promise<void> => {
    // eslint-disable-next-line
    for (const operation of this.operations) {
      if (operation.type === 'd') {
        // eslint-disable-next-line no-await-in-loop
        await delay(operation.meta as number);
      } else if (operation.type === 's') {
        if (this.ref && this.ref.current) {
          const keys = Object.keys(operation.meta);
          // eslint-disable-next-line
          for (const key of keys) {
            // eslint-disable-next-line
            // console.log('apply ', key, ' with ', operation.meta[key]);
            this.ref.current.style[key] = operation.meta[key];
          }
        }
      }
    }
  }
}
