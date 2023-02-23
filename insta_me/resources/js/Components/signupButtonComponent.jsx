import { Link } from "@inertiajs/react"

export default function SignupButton( { _className = '', _id = '', _href = ''} ) {

    return (

        <Link className={_className} id={_id} href={_href}>
        
            Sign Up

        </Link>

    )

}