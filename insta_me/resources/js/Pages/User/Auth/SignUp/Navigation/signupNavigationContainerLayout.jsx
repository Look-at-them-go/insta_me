import HorizontalLine from "@/Components/horizontalLineComponent";
import SignUpNavigationBar from "./signupNavigationBarLayout";

export default function SignUpNavigationContainer( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <SignUpNavigationBar _className="navigationBarTop" _id="navigationBarTopID" />

            <HorizontalLine _className="horizontalLineFull" _id="horizontalLineFullID" />

        </div>

    )

} 