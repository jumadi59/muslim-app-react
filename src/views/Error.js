import Page from "../component/Page";

const Error = () => {
  return (
    <Page title="Page Not Found">
      <main className="container mtb">
        <div className="page-info">
          <div>
            <h1>404</h1>
            <span>Page Not Found</span>
            <p>The page requested could not be found on this server!</p>
            <a href="/" className="btn round outline">
              Back to home
            </a>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default Error;
