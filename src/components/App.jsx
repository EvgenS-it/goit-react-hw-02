import { useState, useEffect } from 'react';
import './App.css';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedbackTypes = window.localStorage.getItem(
      'saved-feedbackTypes'
    );
    if (savedFeedbackTypes !== null) {
      return JSON.parse(savedFeedbackTypes);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      'saved-feedbackTypes',
      JSON.stringify(feedbackTypes)
    );
  }, [feedbackTypes]);

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

  const positiveFeedback = Math.round(
    (feedbackTypes.good / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          good={feedbackTypes.good}
          neutral={feedbackTypes.neutral}
          bad={feedbackTypes.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

// import { useState } from 'react';
// import './App.css';
// import Description from './Description/Description';
// import Options from './Options/Options';
// import Feedback from './Feedback/Feedback';
// import Notification from './Notification/Notification';

// function App() {
//   const [feedbackTypes, setFeedbackTypes] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const updateFeedback = feedbackType => {
//     setFeedbackTypes({
//       ...feedbackTypes,
//       [feedbackType]: feedbackTypes[feedbackType] + 1,
//     });
//     console.log(feedbackType);
//   };

//   const resetFeedback = () => {
//     setFeedbackTypes({
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     });
//   };

//   const totalFeedback =
//     feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
//   console.log(`totalFeedback ${totalFeedback}`);

//   const positiveFeedback = Math.round(
//     (feedbackTypes.good / totalFeedback) * 100
//   );

//   return (
//     <>
//       <Description />
//       <Options
//         updateFeedback={updateFeedback}
//         resetFeedback={resetFeedback}
//         totalFeedback={totalFeedback}
//       />
//       {totalFeedback ? (
//         <Feedback
//           good={feedbackTypes.good}
//           neutral={feedbackTypes.neutral}
//           bad={feedbackTypes.bad}
//           totalFeedback={totalFeedback}
//           positiveFeedback={positiveFeedback}
//         />
//       ) : (
//         <Notification />
//       )}
//     </>
//   );
// }

// export default App;
