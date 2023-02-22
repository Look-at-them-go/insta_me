export default function ReusableButton( { _className = '', _id = '', _type = '', _value = '', _name = '' } ) {

    return (

        <button 
            className={_className}
            id={_id}
            type={_type}
            value={_value}
            name={_name}
        ></button>

    )

}