import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Poster = styled.img`
  display:flex;
  width: 250px;
  height: 350px;
  border-radius: 20px;

`

const Title = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  width: 100%;
  font-size: 16px;
  text-decoration:none;
`

const Container = styled.div`
  width: 250px;
`

export default ({ id, img, title }) => (
  <Container>
    <Link to={`/${id}`}>
      <Poster src={img} />
      <Title>{title}</Title>
    </Link>
  </Container>
);