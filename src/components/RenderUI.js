import React,{useEffect, useState} from 'react'
import { getData } from '../services/apiService';
import Cards from './Cards';
import debounce from 'lodash.debounce';

const fetchData = async (query, cb) => {
    const res = await getData(query);
    cb(res);
   };

   const debouncedFetchData = debounce((query, cb) => {
    fetchData(query, cb);
   }, 500);


const RenderUI = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        debouncedFetchData(query, res => {
            setResults(res);
           });
    },[query])

    


  return (
    <div>
        <div className='search-box-wrapper' style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <input type="text" style={{height: '45px', width: '300px'}} value={query} onChange={(e) => {setQuery(e.target.value)} } />
        </div>
        <div className='cards'>
            <Cards data={results}/>
        </div>
    </div>
  )
}

export default RenderUI