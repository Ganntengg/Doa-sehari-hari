import { useEffect, useState } from "react";
import "./Semua.css";
import { semuaDoa } from "../../Components/api";

function Semua() {
  const [allDoa, setAllDoa] = useState([]);
  useEffect(() => {
    async function fetching() {
      setAllDoa(await semuaDoa());
    }
    fetching();
  }, []);
  console.log(allDoa);

  const PerDoa = () => {
    if (allDoa.length <= 0) return <div>Loading Doa...</div>;
    return allDoa.map((d, i) => {
      return (
        <a href={`/doa/${d.id}`} key={i} className="all-link">
          <div className="all-card">
            <h4 className="all-card-title">{d.doa}</h4>
          </div>
        </a>
      );
    });
  };
  return (
    <>
      <div className="all-c">
        <h2 className="all-title">Semua Do'a Sehari-hari</h2>
        <div className="all-line"></div>
        <div className="all-wrapper">
          <PerDoa />
        </div>
      </div>
    </>
  );
}

export default Semua;
