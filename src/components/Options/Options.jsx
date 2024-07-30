import css from './Options.module.css';
// import PropTypes from 'prop-types';

const Options = () => {
  const { container, good, neutral, bad } = css;
  return (
    <div className={container}>
      <button type="button" className={good}>
        Good
      </button>
      <button type="button" className={neutral}>
        Neutral
      </button>
      <button type="button" className={bad}>
        Bad
      </button>
      {/* <button type="button" className={reset}>
        Reset
      </button> */}
    </div>
  );
};

// Options.propTypes = {
//   items: PropTypes.array.isRequired,
// };

export default Options;
