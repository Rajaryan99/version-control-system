import React, { useEffect, useState } from 'react'
import './dashboard.css'


export default function Dashboard() {


  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [suggestedSearchQuery, setSuggestedSearchQuery] = useState("")
  const [suggestedSearchResult, setSuggestedSearchResult] = useState([])


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
        setSuggestedRepositories(data);
        console.log(suggestedRepositories)

      } catch (error) {
        console.error("Error while fetching repositories: ", error)
      }
    }

    fetchRepositories();
    fetchSuggestedRepositories();
  }, []);


  useEffect(() => {

    if (searchQuery == '') {
      setSearchResults(repositories)
    } else {
      const filteredRepo = repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
      )

      setSearchResults(filteredRepo);
    }

  }, [searchQuery, repositories])
  
  useEffect(() => {

    if (suggestedSearchQuery == '') {
      setSuggestedSearchResult(suggestedRepositories);
    } else {
      const filteredSuggestedRepo = suggestedRepositories.filter((repo) =>
        repo.name.toLowerCase().includes(suggestedSearchQuery.toLowerCase())
      )

      setSuggestedSearchResult(filteredSuggestedRepo)
    }

  }, [suggestedSearchQuery, suggestedRepositories])

  return (
    <section className='dashboard'>
      <aside>
        <h3>Suggested Repositories</h3>
        <div className="suggestSearch">
          <input type="text" placeholder='Search...' value={suggestedSearchQuery} onChange={(e) => setSuggestedSearchQuery(e.target.value)} />
        </div>
        {suggestedSearchResult.map((repo) => (
          <div key={repo._id}>
            <h4><i class="fa-solid fa-link" style={{fontSize:'13px'}}></i> {repo.name}</h4>
            <p>{repo.description}</p>
          </div>
        ))} 
      </aside>
      <main>
        <h2>Your Repositories</h2>
        <div className='search'>
          <input type="text" value={searchQuery} placeholder='find a repository' onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        {searchResults.map((repo) => (
          <div key={repo._id}>
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
          </div>
        ))}
      </main>
      <aside>
        <h3>Upcoming Events</h3>
        <ul>
          <li>
            <p>Tech Conference - Feb 15</p>
          </li>
          <li>
            <p>Developer Hackthone - Mar 17</p>
          </li>
          <li>
            <p>React Summit - Mar 26</p>
          </li>
        </ul>
      </aside>
    </section>
  )
}
