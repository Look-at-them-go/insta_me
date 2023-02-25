import Input from "@/Components/inputComponent"
import Label from "@/Components/labelComponent"
import { useForm } from "@inertiajs/react"

/**
 * Turns out Inertia auto handles CSRF_TOKENS
 * No need to check
 * 
 * If explicit check needed
 * 
 * _token: this.$page.props.csrf_token
 * 
 */

export default function LoginForm( { _className = '', _id = '' }) {

    const { data, setData, post, processing, errors, setError, clearErrors } = useForm({

        email: '',
        password: ''

    })

    const submit = ( event ) => {

        event.preventDefault()

        post(route('login'))

    }

    

    function onHandleChange( event ) {

        setData(data => ({
            ...data,
            [event.target.name]: event.target.value
        }))

        if( event.target.id == 'inputEmailID' && event.target.value == '') {
            setError('email', 'Field must not be empty')
        } else {
            clearErrors('email')
        }

        if( event.target.id == 'inputPasswordID' && event.target.value == '') {
            setError('password', 'Field must not be empty')
        } else {
            clearErrors('password')
        }

    }

    return (

        <form onSubmit={submit} className={_className} id={_id}>

            <div className="inputEmailUser" id="inputEmailUserID">
                <div className="inputEmailUserField" id="inputEmailUserField">
                <Label 
                    _className='inputEmailLabel'
                    _id='inputEmailLabelID'
                    _for='inputEmailID'
                    _data='Email : '
                />
                <Input 
                    _type="text"
                    _className='inputEmail'
                    _id='inputEmailID'
                    _placeholder='John@example.com'
                    _name='email'
                    _value={data.email}
                    handleChange={onHandleChange}
                />
                </div>
                { errors.email && <div className="formError" id="formErrorEmailID">{errors.email}</div>}
            </div>

            
            <div className="inputPasswordUser" id="inputPasswordUserID">
                <div className="inputPasswordUserField" id="inputPasswordUserField">
                <Label 
                    _className='inputPasswordLabel'
                    _id='inputPasswordLabelID'
                    _for='inputPasswordID'
                    _data='Password : '
                />
                <Input 
                    _type="password"
                    _className='inputPassword'
                    _id='inputPasswordID'
                    _placeholder=''
                    _name='password'
                    _value={data.password}
                    handleChange={onHandleChange}
                />
                </div>
                { errors.password && <div className="formError" id="formErrorPasswordID">{errors.password}</div>}
            </div>
            
            <button type="submit" disabled={processing}> Log In </button>

        </form>

    )

}