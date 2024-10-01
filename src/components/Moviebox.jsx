import React from "react";
import wd from "../image/wandd.webp";
import crow from "../image/crow.webp";
import me4 from "../image/me4.webp";
import inout from "../image/inout.webp";
import endus from "../image/endus.webp";
import blink from "../image/blink.webp";
import hijack from "../image/hijack.webp";
import substance from "../image/substance.webp";
import war from "../image/hounds.webp";
import beetle from "../image/beetle.webp";

const Moviebox = () => {
  return (
    <>
      <section class="p-5">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={wd} alt="" />
                  </a>
                </div>
                <span class="round-span">77%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">Deadpool & Wolverine</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Jul 24, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={crow} alt="" />
                  </a>
                </div>
                <span class="round-span">54%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">The Crow</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Aug 21, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={me4} alt="" />
                  </a>
                </div>
                <span class="round-span">72%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">Despicable me 4</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Jun 20, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={inout} alt="" />
                  </a>
                </div>
                <span class="round-span">76%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">Inside Out 2</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Jun 11, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={endus} alt="" />
                  </a>
                </div>
                <span class="round-span">77%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">It Ends With Us</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Aug 07, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={blink} alt="" />
                  </a>
                </div>
                <span class="round-span">67%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">Blink Twice</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Aug 21, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={hijack} alt="" />
                  </a>
                </div>
                <span class="round-span">64%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">Hijack 1971</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Jun 21, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={substance} alt="" />
                  </a>
                </div>
                <span class="round-span">72%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">The Substance</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Sep 07, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={war} alt="" />
                  </a>
                </div>
                <span class="round-span">64%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">Hounds of War</span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Aug 29, 2024</span>
                </div>
              </div>
            </div>
            <div class="col-5-per-row">
              <div class="card bg-white">
                <div class="card-image">
                  <a href="/">
                    <img src={beetle} alt="" />
                  </a>
                </div>
                <span class="round-span">72%</span>
                <div class="card-body text-start">
                  <a href="/">
                    <span class="text-dark fw-bold">
                      Beetlejuice Beetlejuice
                    </span>
                  </a>
                  <br />
                  <span class="text-dark fw-light">Sep 04, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moviebox;
