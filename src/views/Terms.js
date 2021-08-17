import { useEffect, useState } from "react";
import Page from "../component/Page";
import Loading from "../component/Loading";

const Terms = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const loadData = () => {
    fetch("static/terms.data", { method: "GET" })
      .then((response) => response.text())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  });
  return (
    <Page title="Terms">
      <main className="container mtb">
        {isLoading ? (
          <Loading />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        )}
      </main>
    </Page>
  );
};

export default Terms;
