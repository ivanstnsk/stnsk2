import React from 'react';

import {
  ContentHeader,
  ScrollContent,
  ContentContainer,
  SectionTitle,
} from 'components';

import { ContactButton, SocialButton } from './components';
import { useStyles } from './styles';


export const Contacts: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
      <ContentHeader
        title="Contacts"
        subTitle="In case you want to get in touch with me"
      />
      <ScrollContent>
        <ContentContainer>
          <div className={classes.innerContainer}>
            <div className={classes.innerContent}>
              <div className={classes.contentCol}>
                <SectionTitle>Job offers</SectionTitle>
                <ContactButton
                  type="mail"
                  text="ivan.stnsk@gmail.com"
                />
                <ContactButton
                  type="skype"
                  text="ivan.stnsk"
                />
              </div>
              <div className={classes.contentCol}>
                <SectionTitle>Social pages</SectionTitle>
                <div className={classes.socialContent}>
                  <SocialButton
                    type="linkedin"
                  />
                  <SocialButton
                    type="github"
                  />
                  <SocialButton
                    type="instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </ScrollContent>
    </>
  );
};
