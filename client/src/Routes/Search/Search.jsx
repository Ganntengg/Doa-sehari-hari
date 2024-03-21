import { useEffect, useState } from "react";
import { cariDoa } from "../../Components/api";
import "./Search.css";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [hasil, setHasil] = useState({});
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("doa");
    console.log({ query });
    async function fetching() {
      setHasil(await cariDoa(query));
    }
    fetching();
  }, []);
  console.log({ hasil });

  return (
    <>
      <div className="s-container">
        <div className="s-wrapper">
          <h2 className="s-h2 s-title">{hasil.doa}</h2>
          <h2 className="s-h2 s-ayat">{hasil.ayat}</h2>
          <h2 className="s-h2 s-latin">{hasil.latin}</h2>
          <h2 className=" s-arti">Artinya: "{hasil.artinya}"</h2>
        </div>
      </div>
    </>
  );
}

export default Search;
