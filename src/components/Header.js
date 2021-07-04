import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";

const Header = ({ themeColor, setThemeColor }) => {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>

      <div className="theme-switcher">
        {!themeColor && <FontAwesomeIcon icon={faMoon} />}
        {themeColor && <FontAwesomeIcon icon={faMoonSolid} />}
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
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.headerH1};
  }

  .theme-switcher {
    display: flex;
    align-items: center;

    button {
      margin-left: 1rem;
      background: none;
      border: none;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export default Header;
