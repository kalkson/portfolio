import React from 'react';
import propTypes from 'prop-types';
import GlobalStyle from '../style/GlobalStyle';
import StyledMainLayout from './index.styled';
import Nav from '../components/organisms/Nav/Nav';

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <StyledMainLayout>
      {children}
      <span className="footer">
        <span>All rights reserved</span>
        <span>
          View code of this site <a href="https://github.com/kalkson/portfolio">here</a>
        </span>
        <span>Designed and created by Damian Kalka</span>
      </span>
    </StyledMainLayout>
  </>
);

MainLayout.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf([propTypes.node])]).isRequired,
};

export default MainLayout;
