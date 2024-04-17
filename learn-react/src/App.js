import logo from './logo.svg';
import './App.css';


import { FuncComp } from './components/compTypes';
import { ClassComp } from './components/compTypes';
import { CompWithJSX } from './components/JSX';
import { CompWithoutJSX } from './components/JSX';
import { PropsFunc } from './components/props';
import { PropsClass } from './components/props';

function App() {
  return (
    <div className="App">

      {/* Functional Component */}
      <FuncComp></FuncComp>
      {/* Class Component */}
      <ClassComp></ClassComp>

      <hr></hr>

      {/* Component using JSX */}
      <CompWithJSX></CompWithJSX>
      {/* Component without using JSX */}
      <CompWithoutJSX></CompWithoutJSX>

      <hr></hr>
      
      {/* Props - functional comp */}
      <PropsFunc name='Samrat' heroName='Batman'/>
      <PropsFunc name='Ubermensch' heroName='Superman'>
        <br></br>
        <button>Button of Ubermensch</button>
      </PropsFunc>
      
      {/* Props - functional comp */}
      <PropsClass name='Gilgamesh' heroName='Mr.Yeti'>
        <br></br>
        <span>This is children of Gilgamesh.</span>
      </PropsClass>

    </div>
  );
}

export default App;
