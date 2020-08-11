/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
  padding: 1.5rem;
  border-radius: .5rem;
  background-color: #FFF;
  max-width: 700px;
  margin-top: 10rem;

  @media (min-width: 998px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    font-size: 1.5rem;

    &::before{
      content: open-quote;
      font-size: 8rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 1rem;
  }

`;

const Frase = ({ frase }) => (
  <ContenedorFrase>
    <h1>{frase.quote}</h1>
    <p>
      -
      {' '}
      {frase.author}
    </p>
  </ContenedorFrase>
);

Frase.propTypes = {
  frase: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Frase;
