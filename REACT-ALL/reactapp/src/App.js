import logo from './logo.svg';
import './App.css';
import HideAndShowPassword from './components/HideAndShowPassword/HideAndShowPassword';
import CRUD from './components/CRUD/CRUD';
import AddDynamicInput from './components/AddDynamicInput/AddDynamicInput';
function App() {
  return (
    <div className="App">
      {/* <HideAndShowPassword/> */}
       {/* <CRUD/> */}
       <AddDynamicInput/>
    </div>
  );
}

export default App;
