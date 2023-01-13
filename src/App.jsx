import './App.css';
import { Component } from 'react';
import Titulo from './components/titulo';
import Subtitulo from './components/subtitulo';
import Cosas from './components/cosas';

class App extends Component {    
  render() {        
      return (            
        <>
        <Titulo />
        <Subtitulo />
        <Cosas />
        </>
      );    
  }
}
export default App;
