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

const Country = ({ countryDetail, setCountryDetail, setAnimateId }) => {
  const formatArray = (arr) => {
    if (arr.length > 1) {
      return arr.map((item) => item.name).join(", ");
    } else {
      return arr.map((item) => item.name);
    }
  };

  return (
    // <AnimatePresence>
    <StyledArticle
      onClick={() => {
        setCountryDetail(null);
        setAnimateId("");
        document.body.style.overflow = "auto";
      }}
      variants={articleVariants}
      initial="initial"
      animate="visible"
      exit="out"
    >
      {/* <AnimatePresence exitBeforeEnter> */}
      <motion.div
        className="content"
        onClick={(e) => e.stopPropagation()}
        variants={contentVariants}
        initial="initial"
        animate="visible"
        exit="out"
      >
        <motion.div className="img-container">
          <motion.img src={countryDetail.flag} alt="country flag" />
        </motion.div>

        <motion.div className="details">
          <motion.h3>{countryDetail.name}</motion.h3>

          <motion.div className="detail-container">
            <motion.p>
              Native Name: <motion.span>{countryDetail.nativeName}</motion.span>
            </motion.p>
            <motion.p>
              Population:{" "}
              <motion.span>
                {countryDetail.population.toLocaleString()}
              </motion.span>
            </motion.p>
            <motion.p>
              Region: <motion.span>{countryDetail.region}</motion.span>
            </motion.p>
            <motion.p>
              Sub Region: <motion.span>{countryDetail.subregion}</motion.span>
            </motion.p>
            <motion.p>
              Capital: <motion.span>{countryDetail.capital}</motion.span>
            </motion.p>
            <motion.p>
              Top Level Domain:{" "}
              <motion.span>{countryDetail.topLevelDomain[0]}</motion.span>
            </motion.p>
            <motion.p>
              Currencies:{" "}
              <motion.span>{formatArray(countryDetail.currencies)}</motion.span>
            </motion.p>

            <motion.p>
              Languages:{" "}
              <motion.span>{formatArray(countryDetail.languages)}</motion.span>
            </motion.p>

            <motion.p className="bordering-countries">
              Border Countries:{" "}
              {countryDetail.borders.map((country, index) => (
                <motion.span key={index}>{country + " "}</motion.span>
              ))}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* </AnimatePresence> */}
    </StyledArticle>
    // </AnimatePresence>
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
  /* padding: 2rem 0; */
  /* overflow-y: scroll; */

  .content {
    background: ${(props) => props.theme.articleContentBg};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 450px;
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
      /* align-items: center; */
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
