import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to="/">
      <FiArrowLeft
        fontSize="36px"
        color="#d64342"
        m={0}
        style={{ position: "absolute", top: "12%", left: "16%" }}
      />
    </Link>
  );
};

BackButton.propTypes = {};
