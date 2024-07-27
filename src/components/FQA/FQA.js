import React from 'react';
import styled from 'styled-components';
const FQAContainer = styled.div`
  padding: 20px;
  background-color: #821a11;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 80px auto;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 60px auto;
    justify-content:center;
  }

 
`;

const Form = styled.form`
  padding: 20px;
  border: 1px solid #e9e9ba;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Question = styled.h3`
  font-size: 1.5rem;
  color: #e9e9ba;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  color: #e9e9ba;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #e9e9ba;
  justify-items: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 10px;
`;

const Header2 = styled.h1`
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 700;
  color: #821a11;
  text-shadow: 2px 2px 4px rgba(52, 2, 2, 0.5);

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Hr = styled.hr`
  border-color: #e9e9ba;
  margin: 15px;

  @media (max-width: 768px) {
    margin: 10px;
  }

  @media (max-width: 480px) {
    margin: 8px;
  }
`;

const FQA = () => {
  return (
    <>
     <HeaderContainer>
        <Header2>FQA</Header2>
     </HeaderContainer>
    <FQAContainer>
        <Form>
        <Question>What is your return policy?</Question>
      <Answer>
        We accept returns within 30 days of purchase. Please ensure that the item is in its original condition.
      </Answer><Hr/>
      <Question>How can I track my order?</Question>
      <Answer>
        Once your order has shipped, you will receive a tracking number via email. You can use this number to track your order on our website.
      </Answer><Hr/>
      <Question>How can I track my order?</Question>
      <Answer>
        Once your order has shipped, you will receive a tracking number via email. You can use this number to track your order on our website.
      </Answer>
        </Form>
      
      {/* Add more questions and answers as needed */}
    </FQAContainer>
    </>
   
  );
}

export default FQA;
