import LandingPage from '@/Layouts/landingPageLayout'
import { Head, Link } from '@inertiajs/react'

export default function Index() {

    return (
        <>

            <Head title="Messanging App" />

            <LandingPage _className='landingPage' _id='landingPageID'/>

        </>
    )

}