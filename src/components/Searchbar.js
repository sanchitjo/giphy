import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import giphy from './Images/giphy.jpg'



const SearchInput = styled.input`
width: 44%;
height: 25px;
font-size: 18px;
padding: 5px;
outline: none;
border-radius: 5px;

`
const Title = styled.h1`
color: white;
// padding: 10px;
// border-radius: 5px;
margin-left: 0;
margin-top: 35px;
margin-bottom: 0;
`
const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`
const Button = styled.button`
margin-left: 10px;
display: block;
height: 40px;
font-size: 18px;
outline: none;
border-radius: 5px;
background-color: #6157FF;

&:hover {
  cursor: pointer;
}

&:active {
  background-color: white;
}
`

const LogoImage = styled.img`
height: 55px;
width: 95px;
margin-top: 30px;
margin-right: 0;
`
const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 50px;
`

const Searchbar = ({ setisLoading, setgifData }) => {

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setisLoading(true)
    const fetchData = async () => {
      const result = await axios('https://api.giphy.com/v1/gifs/search' , {
        params: {
          api_key: "txsB8RCK27j95F5ZKkEoRCTBtSQIOX4s",
          q: search
        }

      })
      setgifData(result.data.data)
      setisLoading(false)

    }
    fetchData()
  }

  return (
    <>
      <TitleWrapper>
        <LogoImage src={giphy} alt='giphyLogo' />
        <Title>GIPHY</Title>
      </TitleWrapper>

      <Container>
        <SearchInput
          placeholder='Search for any trending gifs here'
          value={search}
          onChange={handleSearch}
        />

        <Button type='submit' onClick={handleClick} >Search</Button>

      </Container>

    </>

  )
}

export default Searchbar