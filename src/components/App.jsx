import { useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
    console.log(feedbackType);
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  console.log(`totalFeedback ${totalFeedback}`);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      {totalFeedback ? (
        <Feedback
          good={feedbackTypes.good}
          neutral={feedbackTypes.neutral}
          bad={feedbackTypes.bad}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
