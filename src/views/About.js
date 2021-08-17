import { useEffect, useState } from "react";
import Page from "../component/Page";
import Loading from "../component/Loading";

const About = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const loadData = () => {
    fetch("static/about.data", { method: "GET" })
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
    <Page title="About">
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

export default About;
