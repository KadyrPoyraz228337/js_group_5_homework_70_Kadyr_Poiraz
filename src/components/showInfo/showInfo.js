import React, {useEffect, useState} from 'react';
import SearchForm from "../searchForm/searchForm";
import axios from 'axios';

const ShowInfo = (props) => {
    const [show, setShow] = useState(null);
    const requestData = async () => {
        const res = await axios.get('http://api.tvmaze.com/search/shows?q='+props.match.params.name);
        setShow(res.data[0].show);
    };
    useEffect(() => {
        requestData();
    },[props.match.params.name]);
    return show && (
        <div>
            <SearchForm {...props} />
            <div className='d-flex align-items-start'>
                <img src={show.image.medium} alt="" className='mr-4' />
                <div>
                    <h1>{show.name}</h1>
                    <h4 className='font-weight-bold'>Language: <span className='font-weight-normal'>{show.language}</span></h4>
                    <h4 className='font-weight-bold'>Type: <span className='font-weight-normal'>{show.type}</span></h4>
                    <div className='d-flex'>
                        <h4 className='font-weight-bold'>Genres:</h4>
                        <ul className='pl-4'>{show.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
                    </div>
                    <h4 className='font-weight-bold'>Premiered: <span className='font-weight-normal'>{show.premiered}</span></h4>
                    {show.summary && <h4 className='font-weight-bold'>Summary: <span className='font-weight-normal'>{show.summary.replace(/(\<(\/?[^>]+)>)/g, '')}</span></h4>}
                </div>
            </div>
        </div>
    );
};

export default ShowInfo;