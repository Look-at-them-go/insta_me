import { Link } from "@inertiajs/react"

export default function LoginButton( { _className = '', _id = '', _href = ''} ) {

    return (

        <Link className={_className} id={_id} href={_href}>
        
            Log In

        </Link>

    )

}