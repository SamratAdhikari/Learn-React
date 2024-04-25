import './App.css';


import { FuncComp } from './components/compTypes';
import { ClassComp } from './components/compTypes';
import { CompWithJSX } from './components/JSX';
import { CompWithoutJSX } from './components/JSX';
import { PropsFunc } from './components/props';
import { PropsClass } from './components/props';
import { State } from './components/compState';
import { Counter } from './components/compState';
import { FuncClickEvent } from './components/eventHandling';
import { ClassClickEvent } from './components/eventHandling';
import { ParentComp } from './components/methodsProps-ParentComp';
import { ElementVariable, IfELseRendering, ShortCktOperator, TernaryConditionalOperator } from './components/compRendering';
import { ListKeyValuePair, ListRendering } from './components/listRendering';
import { InLine, StyleSheets } from './components/styleComp';
import styles from './components/style.module.css'

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

      <hr></hr>
      {/* State */}
      <State name={'KillerBee'} heroName={'Jinchuriki'} data={7}></State>
      <Counter/>

      <hr></hr>
      {/* Event Handling */}
      <FuncClickEvent/>
      <ClassClickEvent/>
      
      <hr></hr>
      
      {/* Methods props */}
      <ParentComp/>

      <hr></hr>
      {/* Conditional Rendering */}
      <IfELseRendering/>
      <ElementVariable/>
      <TernaryConditionalOperator/>
      <ShortCktOperator/>

      <hr></hr>
      {/* List Rendering */}
      <ListRendering/>
      <ListKeyValuePair/>

      <hr></hr>
      {/* Styling react components */}
      <StyleSheets primary={true}/>
      <InLine/>
      <div className={`${styles.primary} ${styles.bold}`}>CSS Module</div>

    </div>
  );
}

export default App;
