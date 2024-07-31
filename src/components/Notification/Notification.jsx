import css from './Notification.module.css';

const Notification = () => {
  const { container, text } = css;
  return (
    <div className={container}>
      <p className={text}>No feedback yet</p>
    </div>
  );
};

export default Notification;
