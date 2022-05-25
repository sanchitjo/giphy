import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import loadingBar from './Images/loading-bar.gif'
import Searchbar from './Searchbar'


const Cards = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 180px;
row-gap: 10px;
color: black;
background-color: black;

@media only screen and (max-width: 450px) {
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-auto-rows: 180px;
}

@media only screen and (max-width:600px) and (min-width:451px) {
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-auto-rows: 180px;
}

@media only screen and (max-width:900px) and (min-width:601px) {
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: 180px;
}
`

const GifImg = styled.img`
margin: 0 auto;
display: flex; 
flex-direction: column;
justify-content: center;
width: 95%;
height: 180px;
`

const LoadingImg = styled.img`
display: block;
margin: auto;
height: 350px;
margin-top: 100px;
`

const Trending = () => {

    const [gifData, setgifData] = useState([])
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        const fetchGifs = async () => {
            const result = await axios(`https://api.giphy.com/v1/gifs/trending`, {
                params: {
                    api_key: 'txsB8RCK27j95F5ZKkEoRCTBtSQIOX4s'
                }
            })

            console.log(result)
            setgifData(result.data.data)
            setisLoading(false)
        }
        fetchGifs()
    }, [])

    return (
        <>
            <Searchbar setisLoading={setisLoading} setgifData={setgifData} />

            {
                isLoading ? (
                    <LoadingImg src={loadingBar} alt='loading...' />
                ) : (
                    <Cards>
                        {
                            gifData.map((data) => {
                                return (
                                    <div key={data.id}>
                                        <GifImg src={data.images.fixed_height.url} alt='gif' />
                                    </div>
                                )
                            })
                        }
                    </Cards>
                )
            }
        </>
    )


}

export default Trending
