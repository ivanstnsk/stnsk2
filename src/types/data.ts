export type TProjectType =
| 'commercial'
| 'personal';

export type TProjectData = {
  id: string;
  type: TProjectType;
  title: string;
  subTitle: string;
  tags: string[];
  team: [string, string][];
  dates: {
    from: [string, string];
    to: [string, string];
  };
  technologies: string;
};

export type TProjectsListData = TProjectData[];
