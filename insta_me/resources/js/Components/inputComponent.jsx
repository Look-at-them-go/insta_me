import { forwardRef } from "react"

export default forwardRef( function Input( { _type = '', _className = '', _id = '', _placeholder = '', _name = '', _value = '', handleChange}, ref) {

    return (

        <input
            type = {_type}
            className = {_className}
            id = {_id}
            placeholder = {_placeholder}
            name = {_name}
            value = {_value}
            onChange = {( event ) => handleChange( event )}
        />
    )

}
);