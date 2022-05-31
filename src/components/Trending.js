import React, { useState, useEffect } from 'react'
import axios from 'axios'
import loadingBar from './Images/loading-bar.gif'
import Searchbar from './Searchbar'
import { LoadingImg, Cards, GifImg, ErrorMessage, NoDataMessage } from './Trending.styles'


const Trending = () => {

    const [gifData, setgifData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {

        const fetchGifs = async () => {
            setIsError(false)
            setisLoading(true)

            try {
                const result = await axios(`https://api.giphy.com/v1/gifs/trending`, {
                    params: {
                        api_key: 'txsB8RCK27j95F5ZKkEoRCTBtSQIOX4s'
                    }
                })
                console.log(result)
                setgifData(result.data.data)
                setisLoading(false)
            } catch (error) {
                setIsError(true)
                setisLoading(false)
                console.log(error)
            }

        }
        fetchGifs()

    }, [])

    const errorFunction = () => {
        if (isError) {
            return (
                <ErrorMessage>Please try again in some time...</ErrorMessage>
            )
        }
    }


    return (
        <>
            <Searchbar setisLoading={setisLoading} setgifData={setgifData} />
            <div>
                {errorFunction()}
            </div>
            {
                isLoading ? (
                    <LoadingImg src={loadingBar} alt='loading...' />
                ) : (
                   !isLoading && gifData.length===0 ? (<NoDataMessage>No Gifs found.</NoDataMessage>
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
                )
                
            }
        </>
    )



}
export default Trending

