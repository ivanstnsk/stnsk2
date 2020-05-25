import React from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  NoPage,
} from 'components';

// import { useStyles } from './styles';


export const Articles: React.FC<{}> = () => {
  // const classes = useStyles();

  return (
    <>
      <ContentHeader
        title="Articles"
        subTitle="Everything I have written"
      />
      <ScrollContent>
        <ContentContainer>
          <NoPage />
        </ContentContainer>
      </ScrollContent>
    </>
  );
};
