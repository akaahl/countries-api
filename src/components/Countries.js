import styled from "styled-components";
import { useEffect } from "react";

const Countries = () => {
  const apiUrl = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <StyledContainer>
      <p>Germany</p>
      <p>Germany</p>
      <p>Germany</p>
      <p>Germany</p>
      <p>Germany</p>
      <p>Germany</p>
      <p>Germany</p>
      <p>Germany</p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem 4rem;
`;

export default Countries;
