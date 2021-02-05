import Link from "next/link"

import Head from 'next/head';
import Layout from "../../components/Layout";

const firstPost = () => {
    return (
        <Layout firstPost>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Hello from first post!</h1>
            <br/>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}

export default firstPost
