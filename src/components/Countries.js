import styled from "styled-components";
import { useState, useEffect } from "react";

const Countries = () => {
  const apiUrl = "https://restcountries.eu/rest/v2/all";

  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <StyledContainer>
      {countries &&
        countries.map((country, id) => (
          <section key={id}>
            <img src={country.flag} alt="flag" />
            <h4>{country.name}</h4>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </section>
        ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem 4rem;

  section {
    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
    }
  }
`;

export default Countries;
