import React, { useEffect, useState } from "react";
import "./ticker.css";
import axios from "axios";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Ticker() {
  const [stocksInfo, setStocksInfo] = useState([]);
  const [indicesInfo, setIndicesInfo] = useState([]);
  const today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  console.log(date);
  const fetchStocksData = async () => {
    try {
      const { data } = await axios.get(
        "https://www.arifhabibltd.com/api/market/stocks"
      );
      console.log(data);
      data.data.sort(compareFn);
      setStocksInfo(data.data);
    } catch (error) {}
  };

  function compareFn(a, b) {
    if (a.volume < b.volume) {
      return 1;
    }
    if (a.volume > b.volume) {
      return -1;
    }
    return 0;
  }

  const fetchIndicesData = async () => {
    try {
      const { data } = await axios.get(
        "https://arifhabibltd.com/api/market/indices"
      );
      console.log(data);
      setIndicesInfo(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchStocksData();
    fetchIndicesData();
  }, []);

  return (
    <div className="container-fluid mainticker">
      <div className="ticker">
        <div className="news">
          <div className="marquee">
            <div className="indices">
              {indicesInfo.map((item) => {
                return (
                  <div>
                    {item.code === "KSE100" ||
                    item.code === "ALLSHR" ||
                    item.code === "KMI30" ? (
                      <div className="stx_ticker_items indices_ticker">
                        <div className="stx_ticker_left">
                          <div className="tic-symbol">{item.code}</div>
                          <div className="tic-close">{item.close}</div>
                        </div>
                        <div
                          className="stx_ticker_change"
                          style={{
                            color: item.change_percent >= 0 ? "#a0ff00" : "red",
                          }}
                        >
                          {item.change} (
                          {(item.change_percent * 100).toFixed(2) + "%"})
                          {item.change_percent >= 0 ? (
                            <IoMdArrowDropup
                              style={{ fontSize: "25px" }}
                            ></IoMdArrowDropup>
                          ) : (
                            <IoMdArrowDropdown
                              style={{ fontSize: "25px" }}
                            ></IoMdArrowDropdown>
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
              <div className="stx_ticker_items datecomp">
                Last Update: {dateTime}
              </div>
            </div>
            <ul>
              {stocksInfo.map((item) => {
                return (
                  <div>
                    {item.beta != null ? (
                    <li className="stx_ticker_items">
                      <div className="stx_ticker_left">
                        <div className="tic-symbol">{item.symbol}</div>
                        <div className="tic-close">{item.close}</div>
                      </div>
                      <div
                        className="stx_ticker_change"
                        style={{
                          color: item.change_percent >= 0 ? "#a0ff00" : "red",
                        }}
                      >
                        {(item.change_percent * 100).toFixed(2) + "%"}
                        {item.change_percent >= 0 ? (
                          <IoMdArrowDropup
                            style={{ fontSize: "25px" }}
                          ></IoMdArrowDropup>
                        ) : (
                          <IoMdArrowDropdown
                            style={{ fontSize: "25px" }}
                          ></IoMdArrowDropdown>
                        )}
                      </div>
                    </li>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
