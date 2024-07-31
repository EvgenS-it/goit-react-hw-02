// Options.jsx
import css from './Options.module.css';
import PropTypes from 'prop-types';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const { container, btn } = css;

  return (
    <div className={container}>
      <button
        type="button"
        className={btn}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={btn}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>

      {totalFeedback > 0 && (
        <button type="button" className={btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func,
  totalFeedback: PropTypes.number,
  resetFeedback: PropTypes.func,
};

export default Options;
