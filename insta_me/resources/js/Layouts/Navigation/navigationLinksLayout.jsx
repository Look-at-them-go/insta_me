import { Link } from "@inertiajs/react";

export default function NavigationLinks( {_className = '', _id = '' } ) {

    return (

        <div className={_className} id={_id}>

            <Link className="navigationLink" id="navigationLinkID" href="/">
                Home
            </Link>
            <Link className="navigationLink" id="navigationLinkID" href="/">
                Service
            </Link>
            <Link className="navigationLink" id="navigationLinkID" href="/">
                Features
            </Link>
            <Link className="navigationLink" id="navigationLinkID" href="/">
                Communities
            </Link>

        </div>

    )

}