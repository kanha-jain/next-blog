import Link from "next/link"

import Head from 'next/head';

const firstPost = () => {
    return (
        <div>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Hello from first post!</h1>
            <br/>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    )
}

export default firstPost
