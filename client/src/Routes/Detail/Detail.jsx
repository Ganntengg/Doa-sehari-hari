import { useEffect, useState } from "react";
import { detailDoa } from "../../Components/api";
import "./Detail.css";
import { useParams } from "react-router-dom";

function Detail() {
  const [detail, setDetail] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function fetching() {
      setDetail(await detailDoa(id));
    }
    fetching();
  }, []);

  return (
    <>
      <div className="det-container">
        <div className="det-wrapper">
          <h2 className="det-h2 det-title">{detail.doa}</h2>
          <h2 className="det-h2 det-ayat">{detail.ayat}</h2>
          <h2 className="det-h2 det-latin">{detail.latin}</h2>
          <h2 className=" det-arti">Artinya: "{detail.artinya}"</h2>
        </div>
      </div>
    </>
  );
}

export default Detail;
