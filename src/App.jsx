import { useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { details, locations } from "./data/data";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="container">
        <div className="nav">
          <TiArrowBack size={28} />
          <p>
            <span>BONGBUIN</span> / <span>01d20</span>
          </p>
        </div>
        <div className="content">
          <div className="qty">
            <h4>Total picked quantity</h4>
            <h3>531</h3>
          </div>
          <div className="input-container">
            <label htmlFor="from_bin">FROM BIN</label>
            <input type="text" name="from_bin" id="" />
          </div>
          <div className="input-container">
            <label htmlFor="barcode">BARCODE</label>
            <input type="text" name="barcode" id="" />
          </div>
          <div className="input-container">
            <label htmlFor="qty">QTY</label>
            <input type="number" name="qty" id="" />
          </div>
          <div className="handles_button">
            <button>Comfirm</button>
            <button>Post</button>
            <button>Change</button>
          </div>
        </div>
      </div>
      <div className="container view_list">
        <input
          type="search"
          name="search"
          value={search}
          placeholder="search view list"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="bin_container">
          {search
            ? locations
                ?.filter((location) => location == search)
                ?.map((location, index) => (
                  <div className="bin" key={index}>
                    <h4>{location}</h4>
                    <ul className="bin_items">
                      {details
                        ?.filter((detail) => detail.BINNO == location)
                        ?.map((binno, i) => (
                          <li key={i}>
                            <a href={binno.IMAGE_URL} target="_blanc">
                              {binno.BARCODE}
                            </a>
                            <span>{binno.QTY} pcs</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))
            : locations?.map((location, index) => (
                <div className="bin" key={index}>
                  <h4>{location}</h4>
                  <ul className="bin_items">
                    {details
                      ?.filter((detail) => detail.BINNO == location)
                      ?.map((binno, i) => (
                        <li key={i}>
                          <a href={binno.IMAGE_URL} target="_blanc">
                            {binno.BARCODE}
                          </a>
                          <span>{binno.QTY} pcs</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default App;
