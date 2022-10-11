import React, { useState } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

import { AppWrapper } from './App.styled';
import { ButtonWrapper } from '../FeedbackOptions/FeedbackOptions.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counter = ({ option }) => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return 0;
    }
  };

  function countTotalFeedback() {
    let total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <AppWrapper>
      <Section title="Please leave feedback">
        <ButtonWrapper>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={counter}
          />
        </ButtonWrapper>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </AppWrapper>
  );
};
