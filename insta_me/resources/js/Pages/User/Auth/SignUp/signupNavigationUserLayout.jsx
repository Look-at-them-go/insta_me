import LoginButton from "@/Components/loginButtonComponent"


export default function SignUpNavigationUser( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <LoginButton _className="loginButton" _id="loginButtonID" _href="/login"/>

        </div>

    )

}