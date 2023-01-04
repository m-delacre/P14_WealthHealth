import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="errorPage">
      <div className="errorPage-text">
        <p>Mince !</p>
        <p>La page que vous recherchez semble introuvable.</p>
        <p>Code erreur : 404</p>
        <Link to="/" className="errorLink">
          <div className="navError">Retourner au formulaire</div>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
