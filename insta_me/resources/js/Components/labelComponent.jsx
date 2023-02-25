export default function Label( { _className = '', _id = '', _for = '', _data = '' } ) {

    return (
        <label
        className={_className}
        id={_id}
        htmlFor={_for}>
            {_data}
        </label>
    )

}