import React, { useState, useEffect } from "react";
import axios from "axios";

//We are using this website for API placeholder: https://jsonplaceholder.typicode.com/
//We are fetching an indivudiual item from an array of info
//Here the tile would change as soon as we change the value of input

const DataFetchingIndividualItem = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <hr />
      {post.title}
    </div>
  );
};

export default DataFetchingIndividualItem;
