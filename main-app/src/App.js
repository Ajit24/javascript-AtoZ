import logo from './logo.svg';
import './App.css';
import HideAndShowPassword from './components/HideAndShowPassword/HideAndShowPassword';
import CRUD from './components/CRUD/CRUD';
import AddDynamicInput from './components/AddDynamicInput/AddDynamicInput';
import GetApiCall from './components/GetApiCall/GetApiCall';
//import ImageUpload from './components/imageUpload/imageUpload';
import SearchBar from './components/SearchBar/SearchBar';
import GetInputBoxValue from './components/GetInputBoxValue/GetInputBoxValue';
import Form from './components/FormValidation/Form';
import TextSlider from './components/TextSlider/TextSlider';
import LocalStorage from './components/LocalStorage/LocalStorage';
import LoginWithLocalStorage from './components/LoginWithLocalstorage/LoginWithLocalstorage';
import DarkToLight from './components/DarkToLight/DarkToLight';
function App() {
  return (
    <div className="App">
      {/* <HideAndShowPassword/> */}
        {/* <CRUD/> */}
       {/* <AddDynamicInput/> */}
       {/* <GetApiCall/> */}
       {/* <ImageUpload/> */}
         {/* <SearchBar/> */}
    {/* <GetInputBoxValue/> */}
    {/* <Form/> */}
    {/* <TextSlider/> */}
    {/* <LocalStorage/> */}
       {/* <LoginWithLocalStorage/> */}
       <DarkToLight/>
    </div>
  );
}

export default App;
