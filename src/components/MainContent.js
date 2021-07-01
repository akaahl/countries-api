import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MainContent = () => {
  return (
    <StyledMain>
      <form className="searh-form">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} />
          <input type="search" placeholder="Search for a country" />
        </div>

        <select placeholder="Filter by region">
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
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
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);

      input[type="search"] {
        width: 100%;
        padding: 0.4rem;
        margin-left: 1rem;
        border: none;
      }
    }
  }
`;

export default MainContent;
