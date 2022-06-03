import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import MainPage from './pages/MainPage';
import Portifolio from './pages/Portifolio';
import SobreMim from './pages/SobreMim';
import Curriculo from './pages/Curriculo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route path="/portifolio" component={ Portifolio } />
        <Route path="/sobremim" component={ SobreMim }/>
        <Route path="/curriculo" component={ Curriculo }/>
      </Switch>
    </div>
  );
}

export default App;
