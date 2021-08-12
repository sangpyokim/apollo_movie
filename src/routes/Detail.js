import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import styled from 'styled-components';

const Loading = styled.div`
  background-color: rgba(25, 25, 25, 0.9);
  font-size:36px;
  height:100vh;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
`


const DesIntro = styled.div`
  font-size:16px;
`

const Title = styled.div`
  font-size: 36px;
`

const Star = styled.div`
  margin: 20px 0 20px 0;
`

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      rating
      language
      medium_cover_image
      description_intro
    }
  }
`;

const Backgound = styled.img`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  filter: blur(4px);
  opacity: 0.3;
  z-index: 0;
`

const Des = styled.div`
margin-right:20px;
width: 350px;
`

const Movie = styled.div`
  display:flex;
  z-index:1;
`

const Img = styled.img`
  width:450px;
  opacity:1;
`

const Container = styled.div`
  background-color: rgba(25, 25, 25, 0.9);
  display:flex;
  justify-content:center;
  align-items: center;
  width:100%;
  height:100vh;
  color:white;
`

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });

  return (
    <>
      { loading && <Loading>Loading...</Loading> }
    <Container>
      <Backgound  src={ data && data.movie && data.movie.medium_cover_image } />
      <Movie>
      
        <Des>
          <Title>
            { data && data.movie && data.movie.title }
          </Title>
          <Star>
            { data && data.movie && data.movie.rating } / 10.0
          </Star>
          <DesIntro>
            { data && data.movie && data.movie.description_intro }
          </DesIntro>
        </Des>
        <Img src={ data && data.movie && data.movie.medium_cover_image } ></Img>
      </Movie>
    </Container>
    </>
    )
  }
   