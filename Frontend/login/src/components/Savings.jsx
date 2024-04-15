import React, { useState, useEffect } from "react";

function DataTable() {
  // State for storing the fetched data
  const [data, setData] = useState([]);
  // State for any error during the fetch
  const [error, setError] = useState(null);
  // State for loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch data from the Gemini server
  const fetchData = () => {
    setLoading(true);

    // Fetch data from the Gemini server
    fetch("https://your-gemini-server-url.com/api/data")
      .then((response) => {
        // Check if the response is OK
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Set the fetched data in state
        setData(data);
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setData([]); // Clear any previous data
      })
      .finally(() => {
        setLoading(false); // End loading
      });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error message */}
      {error && <p>Error: {error.message}</p>}

      {/* Display the table with data */}
      {data.length > 0 && (
        <table>
          {/* Define table header */}
          <thead>
            <tr>
              {/* Assuming each data object has a structure with fields named `id`, `name`, and `value` */}
              <th>ID</th>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>

          {/* Define table body */}
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DataTable;
