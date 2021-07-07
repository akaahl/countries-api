import styled from "styled-components";
import { motion } from "framer-motion";

const articleVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
  out: {
    opacity: 0,
    scale: 0,
  },
};

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
        document.body.style.overflow = "auto";
      }}
      variants={articleVariants}
      initial="initial"
      animate="visible"
      exit="out"
    >
      <motion.div
        className="content"
        onClick={(e) => e.stopPropagation()}
        variants={contentVariants}
        initial="initial"
        animate="visible"
        exit="out"
      >
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
      </motion.div>
    </StyledArticle>
  );
};

const StyledArticle = styled(motion.article)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.articleBg};
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    background: ${(props) => props.theme.articleContentBg};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 470px;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.articleContentShadow};

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
      justify-content: center;

      h3 {
        margin: 1rem auto 0 auto;
        color: ${(props) => props.theme.articleContentText};
        font-weight: 800;
      }

      p {
        color: ${(props) => props.theme.articleContentText};
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
