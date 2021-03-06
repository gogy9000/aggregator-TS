import {Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import {MessagePageContainer} from "./components/MessagePage/messagePageContainer";
// import ProfilePageApiContainer from "./components/ProfilePage/ProfilePageApiContainer";
import {FriendsPageFunctionalComponent} from "./components/FriendsPage/FriendsPageFunctionalComponent";
// import FriendsPageClassComponents from "./components/FriendsPage/FriendsPageClassComponents";
import {
    ProfilePageContainerFC
} from "./components/ProfilePage/ProfilePageContainerFC";
import {useEffect} from "react";
import {useDispatchApp} from "./customHooks/CustomHooks";
import {thunkApp} from "./Redux/AppReducer/AppReducer";
import {thunkProfile} from "./Redux/ProfilePage/ProfilePageReducer";
import {Login} from "./components/final-form/Login";
import {useSelector} from "react-redux";
import {AppStateType} from "./Redux/Redux-store";


const App = () => {
    const isInitializedApp = useSelector((state: AppStateType) => state.AppReducer.isInitializedApp)
    const dispatch = useDispatchApp()

    useEffect(() => {
        dispatch(thunkApp.initializeApp())
    }, [])


    return (
        <>
            {isInitializedApp
                ?
                <div>isInitializedApp</div>
                :
                <div className='generalSettings'>

                    <div className='Header-wrapper'>
                        <div className='Header'><HeaderContainer/></div>
                    </div>

                    <div className='NavBar-wrapper'>
                        <div className='NavBar'><NavBar/></div>
                    </div>

                    <div className='Content-wrapper'>
                        <div className='Content'>
                            <Routes>
                                <Route path="/" element={<ProfilePageContainerFC/>}/>

                                <Route path="/profile/*" element={<ProfilePageContainerFC/>}>
                                    <Route path=":userId" element={<ProfilePageContainerFC/>}/>
                                </Route>

                                <Route path='/messenger' element={<MessagePageContainer/>}/>

                                <Route path='/friends' element={<FriendsPageFunctionalComponent/>}/>

                                <Route path='/login' element={<Login/>}/>


                            </Routes>
                        </div>
                    </div>

                    <div className='Footer-wrapper'>
                        <div className='Footer'><Footer/></div>
                    </div>

                </div>
            }
        </>


    )
}

export default App;





