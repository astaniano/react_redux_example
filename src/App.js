import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {
    let {profilePage, messagesPage} = props.state;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs state={messagesPage}/>}/>
                    <Route path="/profile" render={() => <Profile profilePage={profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
