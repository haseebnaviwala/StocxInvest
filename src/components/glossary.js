import React, { useEffect } from "react";
import "./glossary.css";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import Page_U from "./glossaryContentPage";

export default function Glossary() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const glossarySearchParams = searchParams.get("glossary");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="glossary">
              <div>
                <div className="glossaryHeading">
                  <h3
                    data-aos="fade-down"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                  >
                    GLOSSARY
                  </h3>
                </div>

                <div className="glossarySubContainer row">
                  <div className="glossaryText">
                    <h4
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      Learn & Be A Stock Guru
                    </h4>
                    <p
                      data-aos="fade-left"
                      data-aos-delay="400"
                      data-aos-duration="1000"
                    >
                      The financial world has developed a special
                      investment-oriented language to help describe the stock
                      market, investments, securities for the stock market,
                      stock market analysis, and its conditions. At times you
                      may be confronted with a term which is totally alien or
                      has a completely different meaning from what you thought.
                      Misunderstanding these terms can sometimes lead to the
                      wrong conclusion, and that can cost you money!
                    </p>
                    <p
                      data-aos="fade-left"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                    >
                      What you don't know can hurt you.
                    </p>
                  </div>
                </div>

                <div
                  className="glossarySubContainer row"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                >
                  <div>
                    <p className="glossaryPagesLinks">
                      <Link class="glossaryLink" to="/glossary/?glossary=a">
                        A
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=b">
                        B
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=c">
                        C
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=d">
                        D
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=e">
                        E
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=f">
                        F
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=g">
                        G
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=h">
                        H
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=i">
                        I
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=j">
                        J
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=k">
                        K
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=l">
                        L
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=m">
                        M
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=n">
                        N
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=o">
                        O
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=p">
                        P
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=q">
                        Q
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=r">
                        R
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=s">
                        S
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=t">
                        T
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=u">
                        U
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=v">
                        V
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=w">
                        W
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=y">
                        Y
                      </Link>
                      <span class="contentmaintext">
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                      </span>
                      <Link class="glossaryLink" to="/glossary/?glossary=z">
                        Z
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="glossarySubContainer row">
                  <Page_U glossaryKey={glossarySearchParams} />
                </div>
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}
