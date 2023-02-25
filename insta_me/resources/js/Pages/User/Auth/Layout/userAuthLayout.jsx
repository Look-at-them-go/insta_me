export default function UserAuth( { _className = '', _id = '', _children} ) {

    return (

        <div className={_className} id={_id}>

            {_children}

        </div>

    )

}