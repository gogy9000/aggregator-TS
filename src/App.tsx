import {Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {MessagePageContainer} from "./components/MessagePage/messagePageContainer";
import ProfilePageApiContainer from "./components/ProfilePage/ProfilePageApiContainer";
import {FriendsPageFunctionalComponent} from "./components/FriendsPage/FriendsPageFunctionalComponent";
import FriendsPageClassComponents from "./components/FriendsPage/FriendsPageClassComponents";
import {ProfilePageContainerFC} from "./components/ProfilePage/ProfilePageContainerFC";
// import {ProfilePageApiContainer} from "./ProfilePageApiContainer/ProfilePageApiContainer";


const App = () => {


    // @ts-ignore
    return (


        <div className='generalSettings'>

            <div className='Header-wrapper'>
                <div className='Header'><Header/></div>
            </div>
            <div className='NavBar-wrapper'>
                <div className='NavBar'><NavBar/></div>
            </div>
            <div className='Content-wrapper'>
                <div className='Content'>

                    <Routes>
                        {/*<Route path='/profile:userId?' element= {ProfilePageContainerFC}/>*/}

                        <Route path="/" element={<ProfilePageContainerFC />}/>
                        <Route path="/profile" element={<ProfilePageContainerFC />}>
                            <Route path=":userId" element={<ProfilePageContainerFC />} />
                        </Route>


                        <Route path='/messenger' element={<MessagePageContainer/>}/>
                        {/*<Route path='/friends' element={<FriendsPageFunctionalComponent/>}/>*/}
                        <Route path='/friends' element={<FriendsPageClassComponents/>}/>


                    </Routes>
                </div>
            </div>
            <div className='Footer-wrapper'>
                <div className='Footer'><Footer/></div>
            </div>
        </div>
    );
}

export default App;





