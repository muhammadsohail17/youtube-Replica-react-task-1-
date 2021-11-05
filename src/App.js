import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import SearchPage from './components/SearchPage/SearchPage';
import RecomendedVideos from './components/RecomendedVideos/RecomendedVideos';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {UploadvideoPage} from './components/UploadVideoPage/UploadVideoPage';


function App() {
  return (
    <div className="App">

      <Router>
      <Header/>

        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='AppPage '>
              <SideBar/>
              <SearchPage/>
          </div>
          </Route>

          <Route exact path='/'>
          <div className='AppPage'>
          <SideBar/>
          <RecomendedVideos/>
          </div>
          </Route>

          <Route exact path='/uploadVideo'>

              <UploadvideoPage/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;