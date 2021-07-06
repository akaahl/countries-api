import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";

const Header = ({ themeColor, setThemeColor, setApiUrl, setSelected }) => {
  return (
    <StyledHeader>
      <h1
        onClick={() => {
          setApiUrl("https://restcountries.eu/rest/v2/all");
          setSelected("All");
        }}
      >
        Where in the world?
      </h1>

      <div className="theme-switcher">
        {!themeColor && <FontAwesomeIcon icon={faMoon} />}
        {themeColor && (
          <FontAwesomeIcon
            icon={faMoonSolid}
            className="moon-solid"
            style={{ color: "hsl(0, 0%, 85%)" }}
          />
        )}
        <button onClick={() => setThemeColor(!themeColor)}>
          {themeColor === false ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  background: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.headerBoxShadow};
  z-index: 10;
  transition: background 0.3s ease-in;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.headerH1};
    transition: color 0.3s ease-in;
    cursor: pointer;
  }

  .theme-switcher {
    display: flex;
    align-items: center;

    .moon-switcher {
      path {
        fill: white;
      }
    }

    button {
      margin-left: 1rem;
      background: none;
      border: none;
      font-weight: 700;
      cursor: pointer;
      color: ${(props) => props.theme.headerButton};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 280px) {
    h1 {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;

export default Header;
