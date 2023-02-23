import SignUpNavigationContainer from "./SignUp/signupNavigationContainerLayout";


export default function UserRegister(  {_className = '', _id = '' }  ) {

    return(

        <div className={_className} id={_id}>
        
            <SignUpNavigationContainer _className="navigationContainerTop" _id="navigationContainerTopID" />
            

        </div>

    );

}