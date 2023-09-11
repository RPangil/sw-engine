import useInput from "@/hooks/use-input";
import { useRouter } from "next/navigation";
import styles from './SearchBar.module.css';

const PLANETS_URL = 'https://swapi.dev/api/planets/?search=';
const PEOPLE_URL = 'https://swapi.dev/api/people/?search=';
const FILMS_URL = 'https://swapi.dev/api/films/?search=';
const SPECIES_URL = 'https://swapi.dev/api/species/?search=';
const STARSHIPS_URL = 'https://swapi.dev/api/starships/?search=';
const VEHICLES_URL = 'https://swapi.dev/api/vehicles/?search=';

const SearchBar = () =>
{
    const router = useRouter();

    const {
        value: serachValue,
        inputChange: searchInputChange,
        inputBlur: searchInputBlur,
        reset: searchInputReset
    } = useInput();

    const {
        value: typeValue,
        inputChange: typeInputChange,
    } = useInput();

    const fetchResult = async (type) =>
    {
        try
        {
            const res = await fetch(type+serachValue);
            const data = await res.json();
            console.log(data);

            if(data.count > 1)
            {
                router.push({
                    pathname: '/result',
                    query: {
                        type: typeValue,
                        val: serachValue
                    }
                })
            }
            else
            {

            }
            //console.log(data.results[0].birth_year);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    const searchHandler = (event) =>
    {
        event.preventDefault();
        // console.log(typeValue);
        let type = '';

        switch(typeValue)
        {
            case 'people':
                type = PEOPLE_URL;
                break;
            case 'films':
                type = FILMS_URL;
                break;
            case 'species':
                type = SPECIES_URL;
                break;
            case 'starships':
                type = STARSHIPS_URL;
                break;
            case 'vehicles':
                type = VEHICLES_URL;
                break;
            default:
                type = PLANETS_URL;
                break;
        }
        
        fetchResult(type);
        searchInputReset();
    }

    return (
        <form onSubmit={searchHandler} className={styles.searchForm}>
            <select name="type" id="type" onChange={typeInputChange}>
                <option value='planets'>Planets</option>
                <option value='people'>People</option>
                <option value='films'>Films</option>
                <option value='species'>Species</option>
                <option value='starships'>Starships</option>
                <option value='vehicles'>Vehicles</option>
            </select>
            <input type="search" onChange={searchInputChange} onBlur={searchInputBlur} value={serachValue} />
            <button onClick={searchHandler}>Search</button>
        </form>
    )
}

export default SearchBar;