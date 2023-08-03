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
  return (
    <div className="header">
      <div className="container-menu">
        <div className="position-desc">
          <Link to="/" className={"name"}>
            Leah Schulze
          </Link>

          <div className="description">descript</div>
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
