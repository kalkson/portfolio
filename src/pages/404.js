import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Headline from '../components/atoms/Headline/Headline';

const Styled404 = styled.main`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 15vh auto 0;

  * a {
    color: var(--secondaryColor);
    font-size: 3rem;
  }
`;

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Styled404>
      <Headline>404</Headline>
      <Link to="/">Go to Home page</Link>
    </Styled404>
  </>
);

export default NotFoundPage;
