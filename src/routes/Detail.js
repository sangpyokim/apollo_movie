import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import styled from 'styled-components';

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

const Backgound = styled.div``

const Des = styled.div`
`

const Movie = styled.div`
  display:flex;
`

const Img = styled.img`
  width:350px;
`

const Container = styled.div`
  background-color: rgba(25, 25, 25, 0.9);
  display:flex;
  justify-content:center;
  align-items: center;
  width:100%;
  height:100vh;
`

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id }
  });

  return (
    <Container>
      { loading && <div>loading</div> }
      <Backgound  />
      <Movie>
      
        <Des>
          { data && data.movie && data.movie.title }
          { data && data.movie && data.movie.rating }
          { data && data.movie && data.movie.description_intro.substring(0,50) }
        </Des>

          
        <Img src={data.movie.medium_cover_image} />
      </Movie>
    </Container>
    
  )
}
;