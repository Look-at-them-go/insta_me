import EmptyClassName from "@/Components/Helpers/EmptyClassName"
import NavigationBackground from "@/Components/NavigationBackground"

export default function Header( {defaultClassName = 'DoesNotExist'}) {

    return (

        <div className={ EmptyClassName( defaultClassName, "Header" ) }>

            <NavigationBackground defaultClassName="DoesNotExist"/>

        </div>

    )

}