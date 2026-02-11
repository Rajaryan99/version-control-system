import React, { useEffect, useState } from 'react'
import './create.css'
import Navbar from '../navbar/Navbar'
import BookIcon from '@mui/icons-material/Book';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import axios from 'axios';

export default function Create() {

    const [ownername, setOwnername] = useState("");
    const [reponame, setreponame] = useState("");
    const [description, setDescription] = useState("")
    const [visibility, setVisibility] = useState(true)
    const [owner, setOwner] = useState("");
    
    useEffect(() => {
            const userId = localStorage.getItem('userId');
            const fetchUserDetails = async () => {

                if (userId) {
                    const res = await axios.get(`https://version-control-system-backend-lhob.onrender.com/userProfile/${userId}`)
                    console.log(res.data)
                    setOwnername(res.data.username)
                    setOwner(userId)
                }
            }
      fetchUserDetails()
        
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post(`https://version-control-system-backend-lhob.onrender.com/repo/create`, {
                name: reponame,
                description: description || "",
                visibility: visibility === "public",
                owner,
                content: [],
                issues: []

            })

            console.log("Reposiotry Created", res.data)
            alert("Repository created successfully")

            setreponame("")
            setDescription("")

            window.location.href = '/';
            
        } catch (error) {
            console.error("error in create repo", error.message);
            alert("Failed to create repository");
        }
    }
    return (
        <div className='newRepo'>
            <Navbar />

            <div className="createRepo">
                <div className="heading">
                    <h1>Create a new repository</h1>
                    <p>Repositories contain a project's files and version history. Have a project elsewhere? <a href="">Import a repository.</a></p>
                    <p>Required fields are marked with an asterisk (*).</p>
                </div>

                <div className="create">
                    <h2>General</h2>
                    <div className="repoName">
                        <div className="owner">
                            <p>Owner*</p>
                            <p className='id'>{ ownername}</p>
                        </div>
                        
                        <div className='name'>
                            <label htmlFor="repo">Repository name*</label>
                            <input type="text" name="repo" id="repo" value={reponame} onChange={(e) => setreponame(e.target.value)} />
                        </div>

                    </div>
                    <p className='desc'>Great repository names are short and memorable. How about ?</p>


                    <div className="description">
                        <label htmlFor="des">Description <span>(optional)</span></label>
                        <input type="text" name='des' id='des' value={description}  onChange={(e) => setDescription(e.target.value)}/>
                        <p>0 / 350 character</p>
                    </div>

                    <div className="visibility">
                        <h2>Visibility</h2>
                        <div className="public">
                            <input type="radio" id='Visibility' value="true" checked={visibility === true} onChange={() => setVisibility(true)} />
                            <label htmlFor="visibility">{<BookIcon/>} Public</label>
                            <p>Any one on the internet can see this repository. You choose who can commit.</p>
                        </div>
                        <div className="private">
                            <input type="radio" id='Visibility' value="false" checked={visibility === false} onChange={() => setVisibility(false)} />
                            <label htmlFor="visibility"> { <LockOutlineIcon/>} Private</label>
                            <p>You choose who can see and commit to this repository.</p>
                        </div>


                    </div>

                </div>
                <button className='repobtn' onClick={handleSubmit}>Create repository</button>


            </div>


        </div>
    )
}
