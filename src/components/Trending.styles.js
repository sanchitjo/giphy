import styled from 'styled-components'

export const Cards = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: 180px;
row-gap: 13px;
color: black;
background-color: black;
padding: 20px;

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

export const GifImg = styled.img`
margin: 0 auto;
display: flex; 
flex-direction: column;
justify-content: center;
width: 95%;
height: 180px;
`
export const ErrorMessage = styled.h2`
color: white;
text-align: center;
`
export const NoDataMessage = styled.h2`
text-align: center;
color: red;
margin-top: 150px;
text-align: center;
`
export const LoadingImg = styled.img`
display: block;
margin: auto;
height: 350px;
margin-top: 100px;

@media only screen and (max-width: 450px) {
    height: 200px;
    display: block;
}
`