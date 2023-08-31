import SearchBar from '@/components/SearchBar'
import Head from 'next/head'

export default function Home() {
    return (
        <>
        <Head>
            <title>Star Wars Search Engine</title>
            <meta name="description" content="A search engine that lets you look for characters, species, vehicles and more" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <SearchBar />
        </main>
        </>
    )
}
