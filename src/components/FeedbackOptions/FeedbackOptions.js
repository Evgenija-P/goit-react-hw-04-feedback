import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          name={option}
          style={{ backgroundColor: getRandomColor(option) }}
          onClick={() => onLeaveFeedback({ option })}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

const getRandomColor = option => {
  switch (option) {
    case 'good':
      return 'green';

    case 'neutral':
      return 'orange';

    default:
      return 'red';
  }
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
