import { sign } from 'crypto'
import { GoogleLogo } from 'phosphor-react'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../Context/AuthContext'

const Login = ({isOpen} : any) => {
const {signWithGoogle, Loged, user, LogOut} = useContext(AuthContext)


  async function GoogleLogin() {
    await signWithGoogle();
  } 
  console.log(user.photoURL)

  return (
    <LoginContainer >
      
      {Loged ?  
      <LogedContainer>
        <span>{user.displayName}</span>
        <div><LogOutButton onClick={() => LogOut()}>Logout</LogOutButton></div>
        </LogedContainer>  
      : 
      <Button onClick={() => GoogleLogin()}><GoogleLogo size={15}/> Login with google </Button>}
    </LoginContainer>
  )
}

export default Login      

const LoginContainer = styled.div`
position: absolute;
height: 25px;
top: 4.5rem;
right: 2rem;
background: transparent;
border-radius: 5px;
z-index: 60;

` 

const LogedContainer = styled.div`
background: transparent;
border: 1px solid #181818;
height: 55px;
padding: 5px;
border-radius: 10px;
align-items: center;
` 

const LogOutButton = styled.button`
width: 100%;
border-radius: 5px;
outline:none;
border: none;
background: #181818;
border: 1px solid #181818;
color: #f2f2f2;
margin-top: 5px;
cursor: pointer;
transition: ease-in 0.2s;
:hover{
  color: #181818;
  background: #f2f2f2;
}

`

const Button = styled.button`
background: transparent;
color: #181818;
border: 1px solid #181818;
border-radius: 5px;
outline: none;
padding: 5px;
transition: ease-in-out 0.2s;
cursor: pointer;

:hover{
  background: #181818;
  color: #f2f2f2;
}
`