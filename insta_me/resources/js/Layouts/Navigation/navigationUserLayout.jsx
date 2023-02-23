import LoginButton from "@/Components/loginButtonComponent";
import SignupButton from "@/Components/signupButtonComponent";


export default function NavigationUser( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <SignupButton _className="signupButton" _id="signupButtonID" _href="/register"/>

            <LoginButton _className="loginButton" _id="loginButtonID" _href="/login"/>

        </div>

    )

}