import { useSearchParams } from "next/navigation";
import { Fragment, useCallback, useEffect, useState } from "react";

import styles from './result.module.scss';

const PLANETS_URL = 'https://swapi.dev/api/planets/?search=';
const PEOPLE_URL = 'https://swapi.dev/api/people/?search=';
const FILMS_URL = 'https://swapi.dev/api/films/?search=';
const SPECIES_URL = 'https://swapi.dev/api/species/?search=';
const STARSHIPS_URL = 'https://swapi.dev/api/starships/?search=';
const VEHICLES_URL = 'https://swapi.dev/api/vehicles/?search=';

const results = (props) =>
{
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const params = useSearchParams();
    const type = params.get('type');
    const searchValue = params.get('val');
    let count = 0;
    let paramURL = '';

    const fetchResult = useCallback(async () =>
    {
        setIsLoading(true);

        switch(type)
        {
            case 'people':
                paramURL = PEOPLE_URL;
                break;
            case 'films':
                paramURL = FILMS_URL;
                break;
            case 'species':
                paramURL = SPECIES_URL;
                break;
            case 'starships':
                paramURL = STARSHIPS_URL;
                break;
            case 'vehicles':
                paramURL = VEHICLES_URL;
                break;
            default:
                paramURL = PLANETS_URL;
                break;
        }

        try
        {
            let res = await fetch(paramURL+searchValue);
            let data = await res.json();
            let resultList = [];

            resultList = data.results;
            count = data.count;
            // console.log(data.next);

            while(data.next !== null)
            {
                // console.log(data.next);
                // console.log(resultList);

                res = await fetch(data.next);
                data = await res.json();

                resultList.push(...data.results);
            }

            setSearchResult(resultList);

            // console.log(searchResult);
            // console.log(resultList);
        }
        catch(err)
        {
            console.log(err);
        }
        
        setIsLoading(false);
    }, []);

    useEffect(() =>
    {
        fetchResult();
    }, [])



    return (
        isLoading ? <p>Loading results</p> : searchResult.length <= 0 ? <p>No results found</p> :
        <Fragment>
            {
                searchResult.map((data) =>
                {
                    return (
                        <div className={styles.resultItem}>
                            <h1>{data.name}</h1>
                            <p>A {data.terrain} planet that has a population of {data.population}.</p>
                        </div>
                    )
                })
            }
        </Fragment>
    );
}

export default results;