import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsWrapper, List, Text } from './Statistics.styled';
import { Section } from 'components/Section/Section';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsWrapper>
      <Section title="Statistics">
        <List>
          <li style={{ color: 'green' }}>
            <Text>Good: </Text>
            {good}
          </li>
          <li style={{ color: 'orange' }}>
            <Text>Neutral: </Text>
            {neutral}
          </li>
          <li style={{ color: 'red' }}>
            <Text>Bad: </Text>
            {bad}
          </li>
          <li>
            <Text>Total: </Text>
            {total}
          </li>
          <li>
            <Text>Positive feedback: </Text>
            {positivePercentage}%
          </li>
        </List>
      </Section>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
