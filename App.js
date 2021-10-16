import './App.css';
import AppHeader from './components/AppHeader';
import PicPost from './components/PicPost';
import RosePic from './components/RosePic';
function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid"> 
        <RosePic />
        <RosePic />
        <RosePic />
        <RosePic />
      </div>
    </div>
  );
}

export default App;
