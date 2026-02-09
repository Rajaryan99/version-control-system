import React from 'react'
import './create.css'
import Navbar from '../navbar/Navbar'

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
                        <p>Owner*</p>
                        <p>UsetId</p>
                        <div>
                            <label htmlFor="repo">Repository name*</label>
                            <input type="text" name="repo" id="repo" />
                        </div>
                        <p>Great repository names are short and memorable. How about ?</p>

                        <div className="description">
                            <label htmlFor="des">Description</label>
                            <input type="text" name='des' id='des' />
                            <p>0 / 350 character</p>
                        </div>

                        <div className="visibility">
                            <h2>Visibility</h2>
                            <div className="public">
                                <input type="radio" id='Visibility' />
                                <label htmlFor="visibility">Public</label>
                                <p>Any one on the internet can see this repository. You choose who can commit.</p>
                            </div>
                            <div className="privat">
                                <input type="radio" id='Visibility' />
                                <label htmlFor="visibility">Private</label>
                                <p>You choose who can see and commit to this repository.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
