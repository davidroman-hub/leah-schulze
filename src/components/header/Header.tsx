import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function withRouter<ComponentProps>(Component: React.FunctionComponent<ComponentProps>) {
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
          <div className="name">Leah Schulze</div>
          <div className="description">descript</div>
        </div>
        <div className="menu">
          <div>work</div>
          <div>about</div>
          <div>contact</div>
        </div>
      </div>
    </div>
    
  );
};

export default  withRouter(header);
