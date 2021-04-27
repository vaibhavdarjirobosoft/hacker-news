import './App.css';
import Page from './components/common/Page';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Top from './components/articles/Top';
import Newest from './components/articles/Newest';
import Ask from './components/articles/Ask';
import Show from './components/articles/Show';
import Jobs from './components/articles/Jobs';
import Lists from './components/common/Lists';

function App() {
  return (
      <BrowserRouter>
        <Page>
          <Switch>
            <Route exact path="/"><Top /></Route>
            <Route path="/top"><Top /></Route>
            <Route path="/new"><Newest /></Route>
            <Route path="/ask"><Ask /></Route>
            <Route path="/show"><Show /></Route>
            <Route path="/jobs"><Jobs /></Route>
            <Route path="/lists"><Lists /></Route>
          </Switch>
        </Page>
      </BrowserRouter>
  );
}

export default App;
