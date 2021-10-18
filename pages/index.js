import MainLayout from '../components/MainLayout'
import Hero from  './indexLanding/index__hero'
import Head from "next/head";

export default function Home() {
    return (

        <MainLayout>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                <title>Home Page</title>
            </Head>
                <Hero/>
        </MainLayout>

    )
}
