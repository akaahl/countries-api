import styled from "styled-components";
import { useState, useEffect } from "react";

const Countries = ({ countries, setCountries, apiUrl }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(apiUrl, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("The country that your for searched for does not exist");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        }

        setError("The country that you searched for does not exist");
      });

    return () => abortCont.abort();
  }, [apiUrl, setCountries]);

  return (
    <StyledContainer>
      {error && <h2>{error}</h2>}
      {countries && !error
        ? countries.map((country, id) => (
            <section key={id}>
              <div className="img-container">
                <img src={country.flag} alt="flag" />
              </div>
              <div className="details">
                <h4>{country.name}</h4>
                <p>
                  Population: <span>{country.population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
            </section>
          ))
        : ""}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 4rem 4rem;

  section {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    .img-container {
      width: 100%;
      height: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .details {
      height: 50%;
      padding: 1.5rem;

      h4 {
        font-weight: 700;
        margin-bottom: 1rem;
      }

      p {
        font-weight: 700;

        span {
          font-weight: 500;
          margin-left: 10px;
        }
      }
    }
  }
`;

export default Countries;
