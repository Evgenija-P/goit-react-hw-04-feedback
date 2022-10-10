import React from 'react';
import PropTypes from 'prop-types';

import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTitle>
      <h3>{title}</h3>
      {children}
    </SectionTitle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
