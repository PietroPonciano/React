
import './App.css'
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';
function App() {
  return(
  <>
    <h1>Hello world!</h1>
    {/* Importanto um componente no JSX */}
    <FunctionalComponent />
    <ClassComponent />
    <PropsExample nome="Pietro" idade={17}/>
  </>
  );
}

export default App
