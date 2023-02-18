import EmptyClassName from "./Helpers/EmptyClassName";

export default function NavigationBackground( {defaultClassName = 'DoesNotExist'} ) {

    return (

        <div className={ EmptyClassName(defaultClassName, "NavigationBackground") }>



        </div>

    )

}