import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Countries from "./Countries";

const MainContent = ({ selected, setSelected, apiUrl, setApiUrl }) => {
  const [isActive, setIsActive] = useState(false);
  const [countries, setCountries] = useState(null);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(true);

  const selectOption = (e) => {
    const region = e.target.textContent;

    if (region === "All") {
      setApiUrl("https://restcountries.eu/rest/v2/all");
    } else {
      setSelected(region);
      setApiUrl(`https://restcountries.eu/rest/v2/region/${region}`);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setApiUrl(`https://restcountries.eu/rest/v2/name/${search}`);
    setCheck(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      console.log(search);
    }
  };

  const handleOptionKeyPress = (e) => {
    const region = e.target.textContent;
    if (e.key === "Enter") {
      if (region === "All") {
        setApiUrl("https://restcountries.eu/rest/v2/all");
      } else {
        setSelected(region);
        setApiUrl(`https://restcountries.eu/rest/v2/region/${region}`);
      }
    }
  };

  return (
    <StyledMain
      onClick={(e) => {
        if (!e.target.classList.contains("placeholder")) {
          setIsActive(false);
        }
      }}
    >
      <form className="searh-form" onSubmit={handleForm}>
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="search"
            placeholder="Search for a country"
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="custom-select-menu">
          <div
            role="button"
            aria-pressed="false"
            tabIndex="0"
            onKeyPress={(e) =>
              e.key === "Enter" ? setIsActive(!isActive) : ""
            }
            className="placeholder"
            onClick={() => setIsActive(!isActive)}
          >
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
              <div
                className="option"
                onClick={selectOption}
                role="button"
                aria-pressed="false"
                tabIndex="0"
                onKeyPress={handleOptionKeyPress}
              >
                All
              </div>
              <div
                className="option"
                onClick={selectOption}
                role="button"
                aria-pressed="false"
                tabIndex="0"
                onKeyPress={handleOptionKeyPress}
              >
                Africa
              </div>
              <div
                className="option"
                onClick={selectOption}
                role="button"
                aria-pressed="false"
                tabIndex="0"
                onKeyPress={handleOptionKeyPress}
              >
                Americas
              </div>
              <div
                className="option"
                onClick={selectOption}
                role="button"
                aria-pressed="false"
                tabIndex="0"
                onKeyPress={handleOptionKeyPress}
              >
                Asia
              </div>
              <div
                className="option"
                onClick={selectOption}
                role="button"
                aria-pressed="false"
                tabIndex="0"
                onKeyPress={handleOptionKeyPress}
              >
                Europe
              </div>
              <div
                className="option"
                onClick={selectOption}
                role="button"
                aria-pressed="false"
                tabIndex="0"
                onKeyPress={handleOptionKeyPress}
              >
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
        check={check}
      />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  padding: 7rem 4rem 3rem 4rem;
  background: ${(props) => props.theme.mainContentBg};
  transition: background 0.3s ease-in;

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
      background: ${(props) => props.theme.searchBg};
      transition: background 0.3s ease-in;

      .search-icon {
        color: ${(props) => props.theme.searchIcon};
        transition: color 0.3s ease-in;
      }

      input[type="search"] {
        width: 100%;
        padding: 0.4rem;
        margin-left: 1rem;
        border: none;
        background: ${(props) => props.theme.inputBg};
        color: ${(props) => props.theme.inputText};
        transition: background 0.3s ease-in;
        /* caret-color: transparent; */

        &::placeholder {
          color: ${(props) => props.theme.inputPlaceholder};
          transition: color 0.3s ease-in;
        }

        &:focus {
          outline: ${(props) => props.theme.inputOutline};
        }
      }
    }

    .custom-select-menu {
      width: 25%;
      border-radius: 5px;
      position: relative;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      background: ${(props) => props.theme.selectMenu};
      transition: background 0.3s ease-in;

      .placeholder {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        padding: 1rem 1rem 1rem 1.6rem;
        color: ${(props) => props.theme.selectPlaceholder};
      }

      .options {
        position: absolute;
        top: 3.5rem;
        left: 0;
        width: 100%;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        z-index: 10;
        background: ${(props) => props.theme.optionsBg};
        transition: background 0.3s ease-in;

        .option {
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          z-index: 10;
          color: ${(props) => props.theme.optionText};

          &:first-child {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }

          &:last-child {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          &:hover {
            background: ${(props) => props.theme.optionsHoverBg};
            color: ${(props) => props.theme.optionsHoverText};
          }
        }
      }
    }
  }
`;

export default MainContent;
