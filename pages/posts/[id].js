import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head';
import Date from '../../components/Date';
import { getAllPostIds, getPostData } from "../../lib/posts"

const post = ({ postData }) => {
    return (
        <>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <div>
            {postData.title}
            <br />
            {postData.id}
            <br />
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>        
            <div dangerouslySetInnerHTML={{__html: postData.processedHtml}}></div>
        </div>
        </>
    )
}

export default post

export const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }    
}

export const getStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}

