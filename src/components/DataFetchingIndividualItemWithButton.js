import React, { useState, useEffect } from "react";
import axios from "axios";

//We are using this website for API placeholder: https://jsonplaceholder.typicode.com/
//We are fetching an indivudiual item from an array of info
//Here the tile would change as soon as click the button

const DataFetchingIndividualItemWithButton = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButton]);

  const handleClick = () => {
    setIdFromButton(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />
      <button onClick={handleClick}>Look for title</button>
      <hr />
      {post.title}
    </div>
  );
};

export default DataFetchingIndividualItemWithButton;
