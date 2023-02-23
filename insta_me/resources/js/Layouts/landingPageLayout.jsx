import NavigationContainer from "./Navigation/navigationContainerLayout";

export default function LandingPage( {_className = '', _id = '' } ) {

    

    return (

        <div className={_className} id={_id}>

            <NavigationContainer _className="navigationContainerTop" _id="navigationContainerTopID" />


        </div>

    )

}