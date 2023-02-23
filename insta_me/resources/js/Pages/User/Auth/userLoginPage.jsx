import LoginNavigationContainer from "./Login/loginNavigationContainerLayout";

export default function UserLogin(  {_className = '', _id = '' }  ) {

    return(

        <div className={_className} id={_id}>
        
            <LoginNavigationContainer _className="navigationContainerTop" _id="navigationContainerTopID" />
            

        </div>

    );

}