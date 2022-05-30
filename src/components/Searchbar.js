import axios from 'axios'
import React, { useState } from 'react'
import giphy from './Images/giphy.jpg'
import { TitleWrapper, LogoImage, Title, Container, SearchInput, Button } from './Searchbar.styles'


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