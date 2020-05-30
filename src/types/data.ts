export type TProjectType =
| 'commercial'
| 'personal';

export type TProjectData = {
  id: string;
  type: TProjectType;
  title: string;
  subTitle: string;
  tags: string[];
};

export type TProjectsListData = TProjectData[];
