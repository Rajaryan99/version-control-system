import React, { useEffect, useState } from 'react'


export default function Dashboard() {


  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      const res = await fetch(`http://localhost:3000/repo/user/${userId}`)

      const data = await res.json();
      console.log(data)
    };

    fetchRepositories();
  }, [])

  return (
    <div>
      <h1></h1>
    </div>
  )
}
