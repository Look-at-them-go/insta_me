import NavigationLogo from "@/Layouts/Navigation/navigationLogoLayout";
import NavigationLinks from "@/Layouts/Navigation/navigationLinksLayout";
import LoginNavigationUser from "./loginNavigationUserLayout";

export default function LoginNavigationBar( {_className = '', _id = '' } ) {

    return ( 

        <div className={_className} id={_id}>

            <NavigationLogo _className="navigationLogo" _id="navigationLogoID" />

            <NavigationLinks _className="navigationLinks" _id="navigationLinksID" />

            <LoginNavigationUser _className="navigationUser" _id="navigationUserID" />

        </div>

    )

}