import useInput from "@/hooks/use-input";
import { useRouter } from "next/router";

const notEmpty = (value) => value.trim() !== '';
const PLANETS_URL = 'https://swapi.dev/api/planets/';
const PEOPLE_URI = 'https://swapi.dev/api/people';
const FILMS_URL = 'https://swapi.dev/api/films';
const SPECIES_URL = 'https://swapi.dev/api/species';
const STARSHIPS_URL = 'https://swapi.dev/api/starships';
const VEHICLES_URL = 'https://swapi.dev/api/vehicles';

const SearchBar = () =>
{
    const router = useRouter();

    const {
        value: serachValue,
        isValid: searchIsValid,
        inputChange: searchInputChange,
        inputBlur: searchInputBlur,
        reset: searchInputReset
    } = useInput(notEmpty);

    const {
        value: typeValue,
        inputChange: typeInputChange,
        inputBlur: typeInputBlur,
    } = useInput(notEmpty);

    const fetchResult = async () =>
    {
        try
        {
            const res = await fetch('https://swapi.dev/api/people/?search='+serachValue);
            const data = await res.json();
            console.log(data);
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

        fetchResult();
        searchInputReset();
    }

    return (
        <form onSubmit={searchHandler}>
            <select name="type" id="type" >
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