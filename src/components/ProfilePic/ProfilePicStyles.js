import styled from 'styled-components';

export const CenterDiv = styled.div`
margin-top: 10rem;
margin-bottom: 10rem;
text-align: center;
`
export const Img = styled.img`
width: 280px;
height: 300px;
padding: 10px;
border-radius: 30px;
border: 3px solid white;
&:hover{
    transform: scale(1.01);
  }
`
export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;