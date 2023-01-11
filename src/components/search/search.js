import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
//For search bar
//Library that can be used to paginate through large sets of data asynchronously. 
//  The function takes an asynchronous generator as its first argument, 
//  and returns an asynchronous generator that yields pages of data, 
//  with a specified number of items per page.
import { GEO_API_URL, geoAPIOptions } from "../../api"


const Serach = ({onSearchChange}) => {

    const [search, setSearch] = useState(null)

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);  
    }

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
    }

    return(
        <AsyncPaginate 
            placeholder=""
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    ) 
}

export default Serach