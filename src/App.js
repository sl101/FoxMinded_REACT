import './App.scss';
import DecreaseCountContainer from './components/DecreaseCount/DecreaseCountContainer';
import DisplayFieldContainer from './components/DisplayField/DisplayFieldContainer';
import LogoContainer from './components/Header/LogoContainer';
import IncreaseCountContainer from './components/IncreaseCount/IncreaseCountContainer';

const App = () => {
  return (
    <div className="wrapper">
      <LogoContainer />
      <div className="content">
        <div className="inner">
          <IncreaseCountContainer />
          <DecreaseCountContainer />
        </div>
        <DisplayFieldContainer />
      </div>
    </div>
  );
};

export default App;
