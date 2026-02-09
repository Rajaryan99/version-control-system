import React from 'react'
import './create.css'
import Navbar from '../navbar/Navbar'
import BookIcon from '@mui/icons-material/Book';
import LockOutlineIcon from '@mui/icons-material/LockOutline';

export default function Create() {
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
                            <p className='id'>userid</p>
                        </div>
                        
                        <div className='name'>
                            <label htmlFor="repo">Repository name*</label>
                            <input type="text" name="repo" id="repo" />
                        </div>

                    </div>
                    <p className='desc'>Great repository names are short and memorable. How about ?</p>


                    <div className="description">
                        <label htmlFor="des">Description <span>(optional)</span></label>
                        <input type="text" name='des' id='des' />
                        <p>0 / 350 character</p>
                    </div>

                    <div className="visibility">
                        <h2>Visibility</h2>
                        <div className="public">
                            <input type="checkbox" id='Visibility' />
                            <label htmlFor="visibility">{<BookIcon/>} Public</label>
                            <p>Any one on the internet can see this repository. You choose who can commit.</p>
                        </div>
                        <div className="private">
                            <input type="checkbox" id='Visibility' />
                            <label htmlFor="visibility"> { <LockOutlineIcon/>} Private</label>
                            <p>You choose who can see and commit to this repository.</p>
                        </div>


                    </div>

                </div>
                <button className='repobtn'>Create repository</button>


            </div>


        </div>
    )
}
