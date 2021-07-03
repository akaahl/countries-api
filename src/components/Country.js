import styled from "styled-components";

const Country = ({ countryDetail }) => {
  const formatArray = (arr) => {
    if (arr.length > 1) {
      return arr.map((item) => item.name).join(", ");
    } else {
      return arr.map((item) => item.name);
    }
  };

  return (
    <StyledArticle>
      <div className="content">
        <div className="img-container">
          <img src={countryDetail.flag} alt="country flag" />
        </div>

        <div className="details">
          <h3>{countryDetail.name}</h3>

          <div className="detail-1">
            <p>
              Native Name: <span>{countryDetail.nativeName}</span>
            </p>
            <p>
              Population:{" "}
              <span>{countryDetail.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{countryDetail.region}</span>
            </p>
            <p>
              Sub Region: <span>{countryDetail.subregion}</span>
            </p>
            <p>
              Capital: <span>{countryDetail.capital}</span>
            </p>
          </div>

          <div className="detail-2">
            <p>
              Top Level Domain: <span>{countryDetail.topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies: <span>{formatArray(countryDetail.currencies)}</span>
            </p>

            <p>
              Languages: <span>{formatArray(countryDetail.languages)}</span>
            </p>
          </div>

          <p className="bordering-countries">
            Border Countries:{" "}
            {countryDetail.borders.map((country, index) => (
              <span key={index}>{country + " "}</span>
            ))}
          </p>
        </div>
      </div>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    background: white;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default Country;
