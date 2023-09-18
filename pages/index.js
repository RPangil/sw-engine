import SearchBar from '@/components/SearchBar/SearchBar';
import Head from 'next/head';
import style from './main.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Star Wars Search Engine</title>
                <meta name="description" content="A search engine that lets you look for characters, species, vehicles and more" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.container}>
                <h1 className={style.appTitle}>SW Engine</h1>
                <SearchBar />
            </div>
        </>
    )
}
