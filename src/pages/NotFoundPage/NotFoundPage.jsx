import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { GrHome } from "react-icons/gr";
import { PiSmileySadLight } from "react-icons/pi";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <p className={css.info}>Oooppsss...</p>
      <div className={css.text_info}>
        The page are you looking for may have been moved, deleted or possibly
        never existed
      </div>
      <p className={css.error}>
        4<PiSmileySadLight />4
      </p>
      <Link to={`/`} className={css.link_home}>
        Go HomePage <GrHome className={css.icon} />
      </Link>
    </div>
  );
};
export default NotFoundPage;
