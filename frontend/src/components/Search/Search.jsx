import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../../utils/userUtils";
import {FaSearch} from 'react-icons/fa'
import'./Search.css'



const Search = () => {
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState('');
    const [filterResult, setFilterResult] = useState('');
    const [nameList, setNameList] = useState([]);
 
   
    useEffect(() => {
        fetchAllUsers()
        .then(users => {
            const names = Object.values(users).map(employee => `${employee.firstName} ${employee.lastName}`);
            setNameList(names);
        })
        .catch(error => {
            console.error("Failed to fetch users:", error);
        });
    }, []);

    useEffect(() => {
        if (searchName) {
            const results = nameList.filter(name => name.toLowerCase().includes(searchName.toLowerCase()));
            setFilterResult(results);
        } else {
            setFilterResult([]);
        }
    }, [searchName, nameList]);

    const handleSearch = e => {
        e.preventDefault()

    }

    return (
        <>

            <div className='search-wrapper'>
                <FaSearch id="search-icon" />
                <input type='text' 
                className="input-bar"
                placeholder='Search People...'
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
                />
                <div className="result-list">
                    {filterResult.length > 0 && (
                        <div className="autolist">
                            {filterResult.map((name, index) => (
                                <div id="result-item" key={index} onClick={() => setFilterResult(name)} > {name}</div>
                            ))}
                        </div>
                    )}
                
                </div>   
            </div>
        </>
    )

}

export default Search