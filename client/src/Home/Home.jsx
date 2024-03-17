import { useState } from "react";
import "./Home.css";

function Home() {
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="container">
        <h2 className="home-title">Doa Sehari-hari</h2>
        <input
          type="text"
          className="home-input"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Cari doa secara spesifik?"
        />
        <div className="btn-wrapper">
          <a href="/semua" className="btn">
            Lihat Semua Doa
          </a>
          <a href={`/cari?doa=${title}`} className="btn">
            Cari Doa
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
