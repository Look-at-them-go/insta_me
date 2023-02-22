import NavigationLogo from "./navigationLogoLayout";

export default function NavigationBar( {_className = '', _id = '' } ) {

    return ( 

        <div className={_className} id={_id}>

            <NavigationLogo _className="navigationLogo" _id="navigationLogoID" />

        </div>

    )

}