import HorizontalLine from "@/Components/horizontalLineComponent";
import NavigationBar from "./navigationBarLayout";

export default function NavigationContainer( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <NavigationBar _className="navigationBarTop" _id="navigationBarTopID" />

            <HorizontalLine _className="horizontalLineFull" _id="horizontalLineFullID" />

        </div>

    )

} 