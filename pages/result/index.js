import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";

const PLANETS_URL = 'https://swapi.dev/api/planets/?search=';
const PEOPLE_URL = 'https://swapi.dev/api/people/?search=';
const FILMS_URL = 'https://swapi.dev/api/films/?search=';
const SPECIES_URL = 'https://swapi.dev/api/species/?search=';
const STARSHIPS_URL = 'https://swapi.dev/api/starships/?search=';
const VEHICLES_URL = 'https://swapi.dev/api/vehicles/?search=';

const results = (props) =>
{
    const params = useSearchParams();
    const type = params.get('type');
    const searchValue = params.get('val');

    console.log(params.get('val'));

    return;
}

export default results;