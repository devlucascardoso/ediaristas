import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style';

interface PageTitleProps{
  title: string;
  subtitle?: string | JSX.Element;
  //subtitle?: string > deixa de ser obrigatório
  // subtitle: string |(or) JSX.Element | number 
}

const PageTitle: React.FC<PageTitleProps> = (props) => {

  return (
      <PageTitleContainer>
          <PageTitleStyled>{props.title}</PageTitleStyled>
          <PageSubtitleStyled>
              {props.subtitle}
          </PageSubtitleStyled>
      </PageTitleContainer>
    );
}

export default PageTitle;