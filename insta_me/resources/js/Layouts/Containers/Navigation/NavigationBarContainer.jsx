import NavigationLinksContainer from "./NavigationLinksContainer";
import NavigationLogoContainer from "./NavigationLogoContainer";
import NavigationUserContainer from "./NavigationUserContainer";

export default function NavigationBarContainer() {

    return (

        <div className="NavigationBarContainer">

            <NavigationLogoContainer />

            <NavigationLinksContainer />

            <NavigationUserContainer />

        </div>    

    );

}