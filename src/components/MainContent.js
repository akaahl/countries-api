import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Countries from "./Countries";

const MainContent = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const [countries, setCountries] = useState(null);
  const [apiUrl, setApiUrl] = useState("https://restcountries.eu/rest/v2/all");

  const selectOption = (e) => {
    const region = e.target.textContent;
    setSelected(region);

    setApiUrl(`https://restcountries.eu/rest/v2/region/${region}`);

    // fetch(apiUrl)
    //   .then((res) => res.json())
    //   .then((data) => setCountries(data));
  };

  return (
    <StyledMain
      onClick={(e) => {
        if (!e.target.classList.contains("placeholder")) {
          setIsActive(false);
        }
      }}
    >
      <form className="searh-form">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} />
          <input type="search" placeholder="Search for a country" />
        </div>

        <div className="custom-select-menu">
          <div className="placeholder" onClick={() => setIsActive(!isActive)}>
            {!selected ? "Filter by Region" : selected}{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="chevron-down"
              onClick={(e) => {
                e.stopPropagation();
                setIsActive(!isActive);
              }}
            />
          </div>

          {isActive && (
            <div className="options">
              <div className="option" onClick={selectOption}>
                Africa
              </div>
              <div className="option" onClick={selectOption}>
                Americas
              </div>
              <div className="option" onClick={selectOption}>
                Asia
              </div>
              <div className="option" onClick={selectOption}>
                Europe
              </div>
              <div className="option" onClick={selectOption}>
                Oceania
              </div>
            </div>
          )}
        </div>
      </form>

      <Countries
        countries={countries}
        setCountries={setCountries}
        apiUrl={apiUrl}
        setApiUrl={setApiUrl}
      />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  padding: 3rem 4rem;
  margin-top: 4rem;
  background: hsl(0, 0%, 98%);

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-container {
      width: 35%;
      padding: 0.8rem 1.8rem;
      display: flex;
      align-items: center;
      border-radius: 5px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

      input[type="search"] {
        width: 100%;
        padding: 0.4rem;
        margin-left: 1rem;
        border: none;
      }
    }

    .custom-select-menu {
      /* padding: 1rem; */
      width: 25%;
      border-radius: 5px;
      position: relative;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

      .placeholder {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        padding: 1rem 1rem 1rem 1.6rem;
      }

      .options {
        position: absolute;
        top: 3.5rem;
        left: 0;
        width: 100%;
        /* padding: 0.5rem 0; */
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        z-index: 10;
        background: white;

        .option {
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          z-index: 10;

          &:first-child {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }

          &:last-child {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          &:hover {
            background: hsl(0, 0%, 52%);
            color: white;
          }
        }
      }
    }
  }
`;

export default MainContent;
