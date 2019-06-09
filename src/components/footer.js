import React from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';
import { Container } from '../components/commonStyles';

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 1rem;
  p {
    margin: 0 0 0.5rem 0;
  }
  @media (max-width: 575.98px) {
    padding: 1.5rem 1rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  a {
    margin: 0 0.25rem;
  }
  img {
    margin-bottom: 0;
  }
  @media (max-width: 575.98px) {
    justify-content: center;
  }
`;

const socialIconStyle = {
  width: `30px`,
  height: `30px`,
};

const Footer = () => (
  <FooterContainer>
    <p>Made with {` ❤️`} in Tallinn, Estonia</p>
    <LinksContainer>
      <a
        href="https://dev.to/paramharrison"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          alt="Paramanantham Harrison's DEV Profile"
          height="30"
          width="30"
        />
      </a>
      <SocialIcon
        alt="Linkedin profile"
        style={socialIconStyle}
        target="_blank"
        rel="noopener noreferrer"
        url="https://www.linkedin.com/in/paramanantham"
      />
      <SocialIcon
        alt="Facebook profile"
        style={socialIconStyle}
        target="_blank"
        rel="noopener noreferrer"
        url="https://www.facebook.com/paramanantham.harrison"
      />
      <SocialIcon
        alt="Twitter profile"
        style={socialIconStyle}
        target="_blank"
        rel="noopener noreferrer"
        url="https://twitter.com/learnwithparam"
      />
      <SocialIcon
        alt="Github profile"
        style={socialIconStyle}
        target="_blank"
        rel="noopener noreferrer"
        url="https://github.com/learnwithparam"
      />
      <a
        href="/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        alt="Learn with Param's RSS feed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.374 17c-.897 0-1.626-.727-1.626-1.624s.729-1.624 1.626-1.624 1.626.727 1.626 1.624-.729 1.624-1.626 1.624zm3.885 0c-.03-3.022-2.485-5.474-5.511-5.504v-2.406c4.361.03 7.889 3.555 7.92 7.91h-2.409zm4.081 0c-.016-5.297-4.303-9.571-9.592-9.594v-2.406c6.623.023 11.985 5.384 12 12h-2.408z" />
        </svg>
      </a>
    </LinksContainer>
  </FooterContainer>
);

export default Footer;
