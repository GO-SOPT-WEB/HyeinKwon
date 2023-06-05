import React from "react";
import styled from "styled-components";

export default function Reset({ handleReset }) {
  const handleResetBtn = () => {
    handleReset();
  };
  return <Container onClick={handleResetBtn}>RESET</Container>;
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 5px solid ${({ theme }) => theme.colors.lightpink};

  font-size: 20px;
  color: ${({ theme }) => theme.colors.lightpink};
  text-shadow: 2px 2px 2px coral;
`;
