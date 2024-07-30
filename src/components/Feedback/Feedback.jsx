import css from './Feedback.module.css';
// import PropTypes from 'prop-types';

const Feedback = () => {
  const { container, text } = css;
  return (
    <div className={container}>
      <p className={text}>No feedback yet</p>
    </div>
  );
};

// Feedback.propTypes = {
//   items: PropTypes.array.isRequired,
// };

export default Feedback;
