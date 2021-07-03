import styled from "styled-components";

const Country = ({ countryDetail, setCountryDetail }) => {
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
      }}
    >
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="img-container">
          <img src={countryDetail.flag} alt="country flag" />
        </div>

        <div className="details">
          <h3>{countryDetail.name}</h3>

          <div className="detail-container">
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
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    background: white;
    padding: 1rem;
    display: flex;
    width: 80%;
    height: 60%;
    border-radius: 10px;

    .img-container {
      height: 100%;
      width: 40%;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .details {
      margin-left: 4rem;
      width: 60%;
      display: flex;
      flex-direction: column;

      h3 {
        margin-top: 2rem;

        font-weight: 700;
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
        margin-top: 2rem;
        display: flex;

        .detail-2 {
          margin-left: 4rem;
        }
      }

      .bordering-countries {
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      height: 80%;

      .img-container {
        width: 100%;
        height: 40%;
      }

      .details {
        margin-left: 0;
        width: 100%;

        /* p {
          display: flex;
          justify-content: space-between;
        }

        h3 {
          margin-top: 1rem;
          text-align: center;
        } */

        .detail-container {
          margin-top: 1rem;
          flex-direction: column;
          /* align-items: center; */
          justify-content: center;

          .detail-2 {
            margin-left: 0;
          }
        }

        .bordering-countries {
          margin-top: 1rem;
          /* display: block; */
          /* margin: 1rem auto 0 auto; */
        }
      }
    }
  }

  @media (min-height: 600px) {
    .content {
      height: 70%;
    }
  }

  @media (min-height: 700px) {
    .content {
      height: 65%;
    }
  }

  @media (min-height: 800px) {
    .content {
      height: 55%;
    }
  }

  @media (min-height: 1024px) {
    .content {
      height: 50%;
      width: 50%;
    }
  }

  @media (min-height: 1366px) {
    .content {
      height: 30%;
      width: 80%;
    }
  }
`;

export default Country;
