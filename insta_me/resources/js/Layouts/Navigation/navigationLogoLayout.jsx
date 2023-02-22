import Logo from "@/Components/logoComponent";

export default function NavigationLogo( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <Logo _className="logo" _id="logoID" />

        </div>

    )

}