import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetchingIndividualItemWithManyButtons = () => {

    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((res)=> {
            console.log(res.data);
            setItems(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[resourceType])

    return (
        <div>
            <button onClick={() => setResourceType('posts')}>posts</button>
            <button  onClick={() => setResourceType('users')}>users</button>
            <button  onClick={() => setResourceType('comments')}>comments</button>
            {items.map((each,i)=><div key={each[i]}>{JSON.stringify(each)}</div>)}
        </div>
    );
};

export default DataFetchingIndividualItemWithManyButtons;