import useInput from "@/hooks/use-input";

const notEmpty = (value) => value.trim() !== '';

const SearchBar = () =>
{
    const {
        value: serachValue,
        inputChange: searchInputChange,
        inputBlur: searchInputBlur,
        reset: searchInputReset
    } = useInput(notEmpty);

    const searchHandler = (event) =>
    {
        event.preventDefault();

        console.log(process.env.PLANET_URL+serachValue);

        searchInputReset();
    }

    return (
        <form onSubmit={searchHandler}>
            <input type="search" onChange={searchInputChange} onBlur={searchInputBlur} value={serachValue} />
            <button onClick={searchHandler}>Search</button>
        </form>
    )
}

export default SearchBar;