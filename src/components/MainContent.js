import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  return (
    <StyledMain>
      <form className="searh-form">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} />
          <input type="search" placeholder="Search for a country" />
        </div>

        <div className="custom-select-menu">
          <div className="placeholder">
            Filter by Region <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div className="options">
            <div className="option">Africa</div>
            <div className="option">America</div>
            <div className="option">Asia</div>
            <div className="option">Europe</div>
            <div className="option">Oceania</div>
          </div>
        </div>
      </form>
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
      padding: 1rem;
      width: 15%;
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
        padding-left: 0.6rem;
      }

      .options {
        position: absolute;
        top: 3.5rem;
        left: 0;
        width: 100%;
        /* padding: 0.5rem 0; */
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        border-radius: 5px;

        .option {
          padding: 0.6rem 1.5rem;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
`;

export default MainContent;
