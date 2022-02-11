import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:112234455">112234455</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: contact@email.com">contact@email.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://twitter.com">
            <AiFillTwitterSquare size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
