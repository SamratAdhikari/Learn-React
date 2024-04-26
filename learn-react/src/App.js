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
import { ParentComp } from './components/methodsProps';
import { ElementVariable, IfELseRendering, ShortCktOperator, TernaryConditionalOperator } from './components/compRendering';
import { ListKeyValuePair, ListRendering } from './components/listRendering';
import { InLine, StyleSheets } from './components/styleComp';
import styles from './components/style.module.css'
import { FormComp } from './components/form';
import { CompMountLifecycleParent } from './components/compMountLifecycle';
import { CompUpdateLifecycleParent } from './components/compUpdateLifecycle';
import { Fragnent } from './components/fragments';
import { ParentComponentClass } from './components/pureComp';
import { ParentComponentFunc } from './components/memoComp';
import { Refs } from './components/refs';
import { RefsClass } from './components/refsClass';

function App() {
  return (
    <div className="App">

      {/* Functional Component */}
      <FuncComp></FuncComp>
      {/* Class Component */}
      <ClassComp></ClassComp>

      <hr/>
      {/* Component using JSX */}
      <CompWithJSX></CompWithJSX>
      {/* Component without using JSX */}
      <CompWithoutJSX></CompWithoutJSX>

      <hr/>
      {/* Props - functional comp */}
      <PropsFunc name='Samrat' heroName='Batman'/>
      <PropsFunc name='Ubermensch' heroName='Superman'>
        <br/>
        <button>Button of Ubermensch</button>
      </PropsFunc>
      
      {/* Props - functional comp */}
      <PropsClass name='Gilgamesh' heroName='Mr.Yeti'>
        <br/>
        <span>This is children of Gilgamesh.</span>
      </PropsClass>

      <hr/>
      {/* State */}
      <State name={'KillerBee'} heroName={'Jinchuriki'} data={7}></State>
      <Counter/>

      <hr/>
      {/* Event Handling */}
      <FuncClickEvent/>
      <ClassClickEvent/>
      
      <hr/>
      
      {/* Methods props */}
      <ParentComp/>

      <hr/>
      {/* Conditional Rendering */}
      <IfELseRendering/>
      <ElementVariable/>
      <TernaryConditionalOperator/>
      <ShortCktOperator/>

      <hr/>
      {/* List Rendering */}
      <ListRendering/>
      <ListKeyValuePair/>

      <hr/>
      {/* Styling react components */}
      <StyleSheets primary={true}/>
      <InLine/>
      <div className={`${styles.primary} ${styles.bold}`}>CSS Module</div>

      <hr/>
      {/* Form Handling */}
      <FormComp/>

      <hr/>
      {/* Component Mounting Lifecycle Methods */}
      <CompMountLifecycleParent/>

      <hr/>
      {/* Component Mounting Lifecycle Methods */}
      <CompUpdateLifecycleParent/>

      <hr/>
      {/* Fragments */}
      <Fragnent/>

      <hr/>
      {/* Pure Component */}
      <ParentComponentClass/>

      <hr/>
      {/* Memo Component */}
      <ParentComponentFunc/>

      <hr/>
      {/* NOTE: Refs cannot be attached to functional components */}
      {/* Refs - focus on the input box*/}
      <Refs/>

      <hr/>
      {/* Passing refs between classes */}
      <RefsClass/>


      <hr/>
    </div>
  );
}

export default App;
