import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout'
import Date from '../components/Date';
import utilStyles from '../styles/utils.module.css'
import classnames from 'classnames';
import { useState } from 'react';
import { getSortedPostsData } from '../lib/posts';

// use the 'swr' package which provides a hook to fetch data at client-side
// link: https://swr.vercel.app/ to read more

export default function Home({ allPostsData }) {
  const [color, setColor] = useState(false);
  const colorClass = classnames({
    [utilStyles.red]:color,
    [utilStyles.black]:!color
  })

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>The one above all!</p>
        <p className={colorClass}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <button onClick={() => setColor(!color)}>Change</button>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData
    }
  }
} 