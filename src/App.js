import './App.css';
import Home from './components/Home';
import UserProvaider from './store/appContext'; 

function App() {
  return (
    <>
      <UserProvaider>
        <Home />
      </UserProvaider>
    </>
  );
}

export default App;
