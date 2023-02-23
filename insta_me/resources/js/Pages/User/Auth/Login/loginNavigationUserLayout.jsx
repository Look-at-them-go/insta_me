import SignupButton from "@/Components/signupButtonComponent"


export default function LoginNavigationUser( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <SignupButton _className="signupButton" _id="signupButtonID" _href="/register"/>

        </div>

    )

}