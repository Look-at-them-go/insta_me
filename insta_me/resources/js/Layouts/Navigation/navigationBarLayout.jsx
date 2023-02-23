import NavigationLinks from "./navigationLinksLayout";
import NavigationLogo from "./navigationLogoLayout";
import NavigationUser from "./navigationUserLayout";

export default function NavigationBar( {_className = '', _id = '' } ) {

    return ( 

        <div className={_className} id={_id}>

            <NavigationLogo _className="navigationLogo" _id="navigationLogoID" />

            <NavigationLinks _className="navigationLinks" _id="navigationLinksID" />

            <NavigationUser _className="navigationUser" _id="navigationUserID" />

        </div>

    )

}