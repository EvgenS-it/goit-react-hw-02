import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ good, neutral, bad }) => {
  const { container, text } = css;
  return (
    <div className={container}>
      <p className={text}>good: {good}</p>
      <p className={text}>neutral: {neutral}</p>
      <p className={text}>bad: {bad}</p>
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
