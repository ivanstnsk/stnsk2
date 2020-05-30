export type TContentSize =
  | 'normal'
  | 'compact';

export type TPageHeaderSizes = {
  offsetTop: number;
  offsetBottom: number;
  offsetTopCompact: number;
  offsetBottomCompact: number;
};

export type TPageSizes = {
  offsetTop: number;
  offsetBottom: number;
  offsetTopCompact: number;
  header: TPageHeaderSizes;
};

export type TContentSectionSizes = {
  offsetTop: number;
  offsetBottom: number;
  maxWidth: number;
};

export type TSizes = {
  content: {
    offsetHorizontal: number;
    offsetTop: number;
    offsetBottom: number;
    maxWidth: number;
  };
  page: TPageSizes;
  contentSection: TContentSectionSizes;
  buttons: {
    mainCircleButtonSize: number;
  };
  menu: {
    width: number;
    buttonSize: number;
    buttonIconSize: number;
    buttonOffset: number;
  };
}
