export type TIntroCircleProps = {
  id: string;
  showMode?: boolean;
};

export type TStylesApplier =
| ((nodeRef: React.RefObject<HTMLDivElement>, styleId: number) => void)
| undefined;
