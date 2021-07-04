import styled from "styled-components";
import { motion } from "framer-motion";

const Country = ({
  countryDetail,
  setCountryDetail,
  animateId,
  setAnimateId,
}) => {
  const formatArray = (arr) => {
    if (arr.length > 1) {
      return arr.map((item) => item.name).join(", ");
    } else {
      return arr.map((item) => item.name);
    }
  };

  return (
    <StyledArticle
      onClick={() => {
        setCountryDetail(null);
        setAnimateId("");
        document.body.style.overflow = "auto";
      }}
    >
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="img-container">
          <img src={countryDetail.flag} alt="country flag" />
        </div>

        <div className="details">
          <h3>{countryDetail.name}</h3>

          <div className="detail-container">
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
            <p>
              Top Level Domain: <span>{countryDetail.topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies: <span>{formatArray(countryDetail.currencies)}</span>
            </p>

            <p>
              Languages: <span>{formatArray(countryDetail.languages)}</span>
            </p>

            <p className="bordering-countries">
              Border Countries:{" "}
              {countryDetail.borders.map((country, index) => (
                <span key={index}>{country + " "}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 2rem 0; */
  overflow-y: scroll;

  .content {
    background: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 450px;
    border-radius: 10px;

    .img-container {
      height: 35%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .details {
      width: 100%;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      justify-content: center;

      h3 {
        margin: 1rem auto 0 auto;

        font-weight: 800;
      }

      p {
        font-size: 14px;
        font-weight: 700;

        span {
          margin-left: 5px;
          font-weight: 500;
        }
      }

      .detail-container {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
      }

      .bordering-countries {
        margin-top: 1rem;

        span {
          font-size: 12px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      width: 380px;
    }
  }

  @media (max-width: 425px) {
    .content {
      width: 80%;
    }
  }
`;

export default Country;
