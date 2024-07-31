import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  const { container, text } = css;
  return (
    <div className={container}>
      <p className={text}>Good: {good}</p>
      <p className={text}>Neutral: {neutral}</p>
      <p className={text}>Bad: {bad}</p>
      <p className={text}>Total: {totalFeedback}</p>
      <p className={text}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number,
};

export default Feedback;
