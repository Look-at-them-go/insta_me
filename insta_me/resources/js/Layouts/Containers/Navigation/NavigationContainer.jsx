import HorizontalLineFull from "@/Components/HorizontalLineFull";
import NavigationBarContainer from "./NavigationBarContainer";

export default function NavigationContainer() {

    window.addEventListener("scroll", function( ev ) {

        if( this.scrollY > 0) {

            this.document.getElementById('NavigationContainerID').classList.add("BG-WHITE");

        } else {

            this.document.getElementById('NavigationContainerID').classList.remove("BG-WHITE");

        }

    }, false);

    return (

        <div className="NavigationContainer" id="NavigationContainerID">

            <NavigationBarContainer />
            
            <HorizontalLineFull />


        </div>

    );

}