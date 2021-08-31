import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <section className="tim-cont">
      <div className="tim-head">Timeline Of My Life</div>
      <div class="section agenda">
        <div class="row column text-center">
          <div class="agenda__month">
            <h2 class="agenda__month__title">
              <time datetime="">START</time>
            </h2>
            <ol class="agenda__list">
              <li class="agenda__item toiletteur">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2002</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime="">29th jAN</time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">Birth</h3>
                      <p>
                        A legend was born
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
              <li class="agenda__item">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2005</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime=""></time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">Nursery</h3>
                      <p>
                        Started my pre-primary education
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
            </ol>
            <ol class="agenda__list">
              <li class="agenda__item toiletteur">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2018</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime=""></time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">Xth</h3>
                      <p>
                        I passed Xth Standard from CBSE
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
              <li class="agenda__item">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2020</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime=""></time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">XIIth</h3>
                      <p>
                        I passed my 12th standard from Maharashtra HSC board
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
            </ol>
          </div>
          <div class="agenda__month">
            <ol class="agenda__list">
              <li class="agenda__item veterinaire">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2021</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime=""></time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">VIT</h3>
                      <p>
                        I entered into VIT, Pune
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
              <li class="agenda__item club">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2021</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime=""></time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">FY</h3>
                      <p>
                        Passed my FY of engineering
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
            </ol>
          </div>
          <div class="agenda__month">
            <ol class="agenda__list">
              <li class="agenda__item veterinaire">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2021</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime=""></time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">IEEE</h3>
                      <p>
                        Selected into IEEE Student's Branch, VIT Pune
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
              <li class="agenda__item club">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">2021</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime=""></time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">MERN</h3>
                      <p>
                        I learned MERN stack
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
