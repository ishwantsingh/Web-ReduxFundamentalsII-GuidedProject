import React from 'react';
import styled from 'styled-components';
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';


const StyledContainer = styled.div`
  padding: 10px;
`;

// Do we need to connect Container?
export default function Container() {
  return (
    <StyledContainer>
      <Quotes />
      <QuoteForm />
    </StyledContainer>
  );
}
