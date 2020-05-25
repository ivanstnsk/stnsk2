import React from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  NoPage,
} from 'components';

// import { useStyles } from './styles';


export const CV: React.FC<{}> = () => {
  // const classes = useStyles();

  return (
    <>
      <ContentHeader
        title="CV"
        subTitle="You can download my CV here"
      />
      <ScrollContent>
        <ContentContainer>
          <NoPage />
        </ContentContainer>
      </ScrollContent>
    </>
  );
};
