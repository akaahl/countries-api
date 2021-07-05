import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Country from "./Country";

const Countries = ({ countries, setCountries, apiUrl }) => {
  const [error, setError] = useState(null);
  const [countryDetail, setCountryDetail] = useState(null);
  const [animateId, setAnimateId] = useState("");

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

  const getCountryDetail = (name) => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setCountryDetail(data[0]);
        setAnimateId(data[0].alpha3Code);
      });

    document.body.style.overflow = "hidden";
  };

  return (
    <StyledContainer
    // sytle={{
    //   display: "grid",
    //   gridTemplateColumns:
    //     countries && countries.length > 4
    //       ? "repeat(auto-fit, minmax(200px, 1fr))"
    //       : "200px 200px 200px 200px",
    // }}
    >
      {error && <h2>{error}</h2>}
      {countries && !error
        ? countries.map((country, id) => (
            <section key={id} onClick={() => getCountryDetail(country.name)}>
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
      <AnimatePresence>
        {countryDetail && (
          <Country
            countryDetail={countryDetail}
            setCountryDetail={setCountryDetail}
            animateId={animateId}
            setAnimateId={setAnimateId}
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
  grid-template-columns: repeat(4, minmax(250px, 1fr));
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
`;

export default Countries;
