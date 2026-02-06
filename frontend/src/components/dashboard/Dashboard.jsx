import React, { useEffect, useState } from 'react'


export default function Dashboard() {


  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const res = await fetch(`http://localhost:3000/repo/user/${userId}`);

        const data = await res.json();
        setRepositories(data.repo);
        
      } catch (error) {
        console.error("Error while fetching repositories: ", error)
      }
    }

    const fetchSuggestedRepositories = async () => {
      try {
        const res = await fetch(`http://localhost:3000/repo/all`);

        const data = await res.json();
        console.log(data)
        setSuggestedRepositories(data.repo);
        
        
      } catch (error) {
        console.error("Error while fetching repositories: ", error)
      }
    }

    fetchRepositories();
    fetchSuggestedRepositories();
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
