import css from './Description.module.css';

const Description = () => {
  const { container, title, text } = css;
  return (
    <div className={container}>
      <h1 className={title}>Sip Happens Café</h1>
      <p className={text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
