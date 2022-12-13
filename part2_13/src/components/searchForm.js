const SearchForm = ({value, onchange}) => {
    return(
        <form >
            <div>
            search: <input value = {value} onChange = {onchange} />
            </div>
        </form>

    )
}

export default SearchForm