import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Where in the world?</h1>

      <div className="theme-switcher">
        <FontAwesomeIcon icon={faMoon} />
        <button>Dark Mode</button>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  background: hsl(0, 0%, 98%);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
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
