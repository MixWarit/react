import logo from './logo.svg';
import './App.css';

function App() {
  const textInput = <input type="text" />
  const okButton = <button>
  ปุ่มกด
</button>
  return (
    <div className="app">
      <headers className="app-header">
        <h4>Title</h4> 
      </headers>
      <div className="app-grid"> 
          <div>123456 123456 123456 123456 123456 123456
          123456 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456</div>
          <div>123456 123456 123456 123456 123456 123456
          123456 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456</div>
          <div>123456 123456 123456 123456 123456 123456
          123456 123456 123456 123456 123456 123456 123456 123456 123456 123456 123456</div>        
      </div>
    </div>
  );
}

export default App;
