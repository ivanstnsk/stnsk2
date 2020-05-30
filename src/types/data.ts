export type TProjectData = {
  id: string;
  title: string;
  subTitle: string;
};

export type TProjectsListData = {
  commercial: TProjectData[];
  personal: TProjectData[];
};
