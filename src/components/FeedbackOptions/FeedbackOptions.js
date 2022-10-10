import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(btnTitle => (
        <Button
          type="button"
          key={btnTitle}
          btnTitle={btnTitle}
          style={{ backgroundColor: getRandomColor(btnTitle) }}
          onClick={() => onLeaveFeedback(btnTitle)}
        >
          {btnTitle}
        </Button>
      ))}
    </div>
  );
};

function getRandomColor(btnTitle) {
  if (btnTitle === 'good') {
    return 'green';
  } else if (btnTitle === 'neutral') {
    return 'orange';
  }
  return 'red';
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
