import { router, useForm } from "@inertiajs/react";


export default function UserLogin(  ) {

    const { data, setData, post } = useForm({
        username: '',
        email: '',
        password: ''
    });

    const sumbit = (e) => {

        e.preventDefault();

        post(route('register'));

    };

    return(

        <form onSubmit={sumbit}>

            <input type="text" value={data.username} onChange={e => setData('username', e.target.value)} />
            <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} />
            <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} />
            <button type="submit"> Register </button>

        </form>

    );

}