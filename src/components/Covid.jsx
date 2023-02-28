import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CountrySelect } from "./CountrySelect";
import { DataBoxes } from "./DataBoxes";
import { Header } from "./Header";
import { Title } from "./Title";

export const Covid = () => {
  useEffect(() => {
    getDataCovid();
  }, []);

  const [title, setTitle] = useState("Goblal");
  const [dataDate, setDataDate] = useState("");
  const [stats, setStats] = useState({});
  const [countries, setCountries] = useState([]);
  const [select, setSelect] = useState(0);
  const [loading, setLoading] = useState("");

  const getDataCovid = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("https://api.covid19api.com/summary");
      setLoading(false);
      setTitle("Global");
      setSelect(0);
      setDataDate(moment(data.Date).format("MMMM Do YYYY, h:mm:ss a"));
      setStats(data.Global);
      setCountries(data.Countries);
    } catch (error) {
      console.log("error en getDataCovid", error.message);

      Swal.fire({
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const onChange = (e) => {
    if (e.target.value === "0") {
      return getDataCovid();
    }

    setSelect(e.target.value);
    const country = countries.find((item) => item.ID === e.target.value);
    setStats(country);
    setTitle(country.Country);
  };

  const numberWithCommas = (x) => {
    if (typeof x !== "undefined") {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  return (
    <div>
      <Header />

      {loading ? (
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <Title title={title} dataDate={dataDate} />
          <DataBoxes numberWithCommas={numberWithCommas} stats={stats} />
          <CountrySelect
            onChange={onChange}
            countries={countries}
            select={select}
          />

          {stats.Country && (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => getDataCovid()}>
              Global
            </button>
          )}
        </div>
      )}
    </div>
  );
};
