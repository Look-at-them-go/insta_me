import HorizontalLine from "@/Components/horizontalLineComponent";
import LoginNavigationBar from "./loginNavigationBarLayout";

export default function LoginNavigationContainer( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <LoginNavigationBar _className="navigationBarTop" _id="navigationBarTopID" />

            <HorizontalLine _className="horizontalLineFull" _id="horizontalLineFullID" />

        </div>

    )

} 