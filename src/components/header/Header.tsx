import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

export function withRouter<ComponentProps>(
  Component: React.FunctionComponent<ComponentProps>
) {
  function ComponentWithRouterProp(props: ComponentProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t] = useTranslation("global");
  return (
    <div className="header">
      <div className="container-menu">
        <div className="position-desc">
          <Link to="/" className={"name"}>
            Leah Schulze
          </Link>

          <div className="description">{t("Home.desc")}</div>
        </div>
        <div className="menu">
          <Link to="/work" className={"section-link"}>
            Work
          </Link>
          <div>about</div>
          <div>contact</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(header);
