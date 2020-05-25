import React from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  NoPage,
} from 'components';

// import { useStyles } from './styles';


export const Projects: React.FC<{}> = () => {
  // const classes = useStyles();

  return (
    <>
      <ContentHeader
        title="Projects"
        subTitle="My commercial and not really projects"
      />
      <ScrollContent>
        <ContentContainer>
          <NoPage />
        </ContentContainer>
      </ScrollContent>
    </>
  );
};
