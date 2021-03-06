import styled from "styled-components";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Country from "./Country";

const Countries = ({ countries, setCountries, apiUrl }) => {
  const [error, setError] = useState(null);
  const [countryDetail, setCountryDetail] = useState(null);
  const [loader, setLoader] = useState(true);

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
        setError("The country that you searched for does not exist");
      });

    return () => abortCont.abort();
  }, [apiUrl, setCountries]);

  const getCountryDetail = (name) => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountryDetail(data[0]);
      });

    document.body.style.overflow = "hidden";
  };

  return (
    <StyledContainer
      style={{
        gridTemplateColumns:
          countries && countries.length > 4
            ? "repeat(auto-fit, minmax(250px, 1fr))"
            : "repeat(4, minmax(300px, 1fr))",
      }}
    >
      {error && <h2>{error}</h2>}
      {countries && !error
        ? countries.map((country, id) => (
            <section key={id} onClick={() => getCountryDetail(country.name)}>
              <div className="img-container">
                <div
                  style={{ display: loader ? "flex" : "none" }}
                  className="loader"
                >
                  <div className="spinner"></div>
                </div>
                <img
                  src={country.flag}
                  alt="flag"
                  onLoad={() => setLoader(false)}
                  style={{ display: loader ? "none" : "block" }}
                />
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
      <AnimatePresence>
        {countryDetail && (
          <Country
            countryDetail={countryDetail}
            setCountryDetail={setCountryDetail}
          />
        )}
      </AnimatePresence>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-gap: 4rem 4rem;

  section {
    box-shadow: ${(props) => props.theme.countriesShadow};
    border-radius: 7px;
    cursor: pointer;
    background: ${(props) => props.theme.countriesBackground};
    transition: background 0.3s ease-in;

    .img-container {
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      overflow: hidden;
      width: 100%;
      height: 50%;

      .loader {
        height: 170px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${(props) => props.theme.loaderBg};
        transition: background 0.3s ease-in-out;

        .spinner {
          display: inline-block;
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
          -webkit-animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        @-webkit-keyframes spin {
          to {
            -webkit-transform: rotate(360deg);
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .details {
      height: 50%;
      padding: 1.5rem;

      h4 {
        font-weight: 700;
        margin-bottom: 1rem;
        color: ${(props) => props.theme.countriesText};
      }

      p {
        font-weight: 700;
        color: ${(props) => props.theme.countriesText};

        span {
          font-weight: 500;
          margin-left: 10px;
        }
      }
    }
  }

  @media (max-width: 375px) {
    grid-template-columns: 150px;
  }
`;

export default Countries;
