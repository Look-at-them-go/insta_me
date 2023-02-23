import NavigationLogo from "@/Layouts/Navigation/navigationLogoLayout";
import NavigationLinks from "@/Layouts/Navigation/navigationLinksLayout";
import SignUpNavigationUser from "./signupNavigationUserLayout";

export default function SignUpNavigationBar( {_className = '', _id = '' } ) {

    return ( 

        <div className={_className} id={_id}>

            <NavigationLogo _className="navigationLogo" _id="navigationLogoID" />

            <NavigationLinks _className="navigationLinks" _id="navigationLinksID" />

            <SignUpNavigationUser _className="navigationUser" _id="navigationUserID" />

        </div>

    )

}