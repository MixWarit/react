import logo from './logo.svg';
import './App.css';

function App() {
  const textInput = <input type="text" />
  const okButton = <button>ปุ่มกด</button>
  return (
    <div className="app">
      <headers className="app-header">
        <img className="app-header-logo"src="/images/test.png"/>
      </headers>
      <div className="app-grid"> 
          <div className="rose-pic">
            <img src="/images/5.jpg"/>
          </div>
          <div className="rose-pic">
            <img src="/images/1.jpg"/>
          </div>
          <div className="rose-pic">
            <img src="/images/3.jpg"/>
          </div>
          <div className="rose-pic">
            <img src="/images/2.jpg"/>
          </div>
      </div>
    </div>
  );
}

export default App;
