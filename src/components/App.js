// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setDogImageUrl(data.message))
      .catch((error) => console.error('Error fetching dog image:', error));
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      {!dogImageUrl ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;

