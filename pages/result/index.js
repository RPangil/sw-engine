import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

const PLANETS_URL = 'https://swapi.dev/api/planets/?search=';
const PEOPLE_URL = 'https://swapi.dev/api/people/?search=';
const FILMS_URL = 'https://swapi.dev/api/films/?search=';
const SPECIES_URL = 'https://swapi.dev/api/species/?search=';
const STARSHIPS_URL = 'https://swapi.dev/api/starships/?search=';
const VEHICLES_URL = 'https://swapi.dev/api/vehicles/?search=';

const results = () =>
{
    const params = useSearchParams();
    const type = params.type;
    const searchValue = params.val;

    console.log(type)

    return;
}

export default results;