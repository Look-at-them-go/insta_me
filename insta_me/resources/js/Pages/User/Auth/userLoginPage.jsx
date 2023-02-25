import UserAuth from "./Layout/userAuthLayout";
import LoginForm from "./Login/Layout/loginFormLayout";
import LoginNavigationContainer from "./Login/Navigation/loginNavigationContainerLayout";

export default function UserLogin() {

    return(

        <div className="userLogin" id="userLoginID">
        
            <LoginNavigationContainer _className="navigationContainerTop" _id="navigationContainerTopID" />
            
            <UserAuth 
                _className="userAuthLayout"
                _id="userAuthLayoutID"
                _children={<LoginForm _className="loginForm" _id="loginFormID"/>}
            />

        </div>

    );

}