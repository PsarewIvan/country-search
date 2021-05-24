import loadingImg from './Pulse-1s-200px.svg';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loadingImg} className="preloader__img" alt="Loading app" />
    </div>
  );
};

export default Preloader;
