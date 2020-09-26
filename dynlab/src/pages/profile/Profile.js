// main imports
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';

// createUser, updateUser, getUser
import { createUser, updateUser } from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';

// Amplify imports
import { Auth } from 'aws-amplify';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);



// start coding ... 
const initialState = { id: null, username: null, firstName: null, lastName:null, bio:null, image:null};

function Profile() {
    const [user, setUser] = useState({ id: null, username: null});
    const [profile, setProfile] = useState(initialState);
    const [formState, setFormState] = useState(initialState);
    
    useEffect(()=>{
        if (user.id === null)
            getAuthUser();
        
    },[user, profile])

    async function getAuthUser(){
        Auth.currentAuthenticatedUser({
            bypassCache: false
        }).then(async user => {
            setUser({
                id: user.attributes.sub,
                username: user.username
            });
      })
      .catch(err => console.log(err));
    }

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function updateProfile(e){
        e.preventDefault();

        const update = { ...formState, id: user.id, username: user.username }    
        const result = await getProfile(user.id)

        if (result.id === null){
            await API.graphql(graphqlOperation(createUser, {input: update}))
        } else {
            await API.graphql(graphqlOperation(updateUser, {input: update}))
        }
        setProfile(update)
    }

    async function getProfile(id){
        const result = await API.graphql(graphqlOperation(getUser, { id: id }))
        let profile = initialState
        
        if (result.data.getUser != null){
            
            profile = result.data.getUser
            setProfile(profile)
        }   

        
        return profile
    }


    return (
        <Container>

            <h2>Profile</h2>
            <form onSubmit={updateProfile}>
                <input value={profile.firstName} placeholder="firstName" onChange={event => setInput('firstName', event.target.value)}/>
                <input value={profile.lastName} placeholder="lastName" onChange={event => setInput('lastName', event.target.value)}/>
                <input value={user.username} placeholder="username" onChange={event => setInput('username', event.target.value)}/>
                <input value={profile.image} placeholder="image" onChange={event => setInput('image', event.target.value)}/>
                <input value={profile.bio} placeholder="bio" onChange={event => setInput('bio', event.target.value)}/>
                
                <button type='submit'>Update</button>
            </form>
        </Container>
    )
}

export default Profile