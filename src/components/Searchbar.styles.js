import styled from 'styled-components'


export const SearchInput = styled.input`
width: 44%;
height: 25px;
font-size: 18px;
padding: 5px;
outline: none;
border-radius: 5px;
`
export const Title = styled.h1`
color: white;
margin-left: 0;
margin-top: 35px;
margin-bottom: 0;
`
export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-bottom: 20px;
`
export const Button = styled.button`
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
export const LogoImage = styled.img`
height: 55px;
width: 95px;
margin-top: 30px;
margin-right: 0;
`
export const ErrorMessage = styled.h2`
color: black;
text-align: center;
`

export const TitleWrapper = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 50px;
`