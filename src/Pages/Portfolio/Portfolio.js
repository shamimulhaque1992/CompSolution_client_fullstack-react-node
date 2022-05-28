import React from "react";
import { Link } from "react-router-dom";
import fabric from "../../assets/images/fabric.png";
import fps from "../../assets/images/fps.png";
import profileimage from "../../assets/images/profile.jpeg";
import t3 from "../../assets/images/t3.png";

const Portfolio = () => {
  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={profileimage}
            className="max-w-2xl rounded-2xl shadow-2xl"
            alt="profile"
          />
          <div>
            <h1 className="text-5xl font-bold">
              I'M KHANDOKER SHAMIMUL HAQUE.
            </h1>
            <p className="py-6">
              I'm a fresh graduate from Daffold International University.I
              completed my graduation in Computer Science and Engineering.Now
              I'm actively looking fro a job as a Full stack Web Developer.
            </p>

            <a
              href="http://www.google.com"
              for="my-modal-3"
              className="btn modal-button"
            >
              More About Me
            </a>
          </div>
        </div>
      </div>
      <div className="divider w-10/12 mx-auto"></div>
      <div>
        <h1 className="text-center text-5xl font-bold mb-5">
          Some Personal Info
        </h1>
        <div>
          <div className="flex flex-col justify-center">
            <div className="mx-auto mb-8">
              <h1>PERSONAL INFOS</h1>
              <div className="flex">
                <dir>
                  <p>First Name: Khandoker Shamimul Haque</p>
                  <p>Age: 23 Years</p>

                  <p>Phone: +8801779312970</p>
                  <p>Email: khandoker15-1992@diu.edu.bd</p>
                </dir>
                <dir>
                  <p>Last Name: Kashfee</p>
                  <p>Nationality: Bangladeshi</p>
                  <p>Address: Dhaka</p>
                </dir>
              </div>
              <button className="btn">
                Download CV{" "}
                <svg
                  className="pl-3"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg>
              </button>
            </div>
            <div className="divider w-10/12 mx-auto"></div>
            <div className="text-5xl mb-8">My Educational Background</div>
            <div className="grid mx-auto grid-cols-2 gap-4">
              <div className="card  glass w-96 shadow-xl">
                <div className="card-body text-left">
                  <h2 className="card-title">JSC(Junior School Certificate)</h2>
                  <p>
                    <strong>Institution: </strong>B.N. School and College
                  </p>
                  <p>
                    <strong>Passing Year: </strong>2012
                  </p>
                  <p>
                    <strong>GPA: </strong>4.78
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                  </div>
                </div>
              </div>
              <div className="card  glass w-96 shadow-xl">
                <div className="card-body text-left">
                  <h2 className="card-title">
                    SSC(Secondery School Certificate)
                  </h2>
                  <p>
                    <strong>Institution: </strong>B.N. School and College
                  </p>
                  <p>
                    <strong>Passing Year: </strong>2015
                  </p>
                  <p>
                    <strong>GPA: </strong>4.71
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                  </div>
                </div>
              </div>
              <div className="card  glass w-96 shadow-xl">
                <div className="card-body text-left">
                  <h2 className="card-title">
                    HSC(Higher Secondery Certificate)
                  </h2>
                  <p>
                    <strong>Institution: </strong>B.N. School and College
                  </p>
                  <p>
                    <strong>Passing Year: </strong>2012
                  </p>
                  <p>
                    <strong>GPA: </strong>3.83
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                  </div>
                </div>
              </div>
              <div className="card  glass w-96 shadow-xl">
                <div className="card-body text-left">
                  <h2 className="card-title">BSc. in CSE </h2>
                  <p>
                    <strong>Institution:</strong> Daffodil International
                    University
                  </p>
                  <p>
                    <strong>Passing Year: </strong>2022
                  </p>
                  <p>
                    <strong>GPA: </strong>3.75
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="divider mt-20 w-10/12 mx-auto"></div>
      <div className="mt-4 mb-20">
        <h1 className="mt-10 text-center text-5xl font-bold mb-5">My Skills</h1>
        <div>
          <div className="flex justify-center  items-center ">
            <div>
              <dir className="flex items-center justify-between">
                <p>HTML</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
              <dir className="flex items-center justify-between">
                <p>CSS</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
              <dir className="flex items-center justify-between">
                <p>BOOTSTRAP</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
              <dir className="flex items-center justify-between">
                <p>JAVASCRIPT</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
            </div>

            <dir>
              <dir className="flex items-center justify-between">
                <p>REACT JS</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
              <dir className="flex items-center justify-between">
                <p>NODE JS</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
              <dir className="flex items-center justify-between">
                <p>FIREBASE</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
              <dir className="flex items-center justify-between">
                <p>MONGODB</p>
                <progress
                  className="progress pl-5 w-56"
                  value="50"
                  max="100"
                ></progress>
              </dir>
            </dir>
          </div>
        </div>
      </div>
      <div className="divider mb-10 w-10/12 mx-auto"></div>

      <div>
        <h1 className="text-center text-5xl font-bold mb-5">
          Some of My Projects
        </h1>
        <div className="grid grid-cols-2 gap-1 mx-auto pb-20">
          <div className="mx-auto">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={t3} alt="project" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Fresh-feel.com</h2>
                <p>A  fregrence werehouse website where people can order huge amount of fregrence.</p>
                <div className="card-actions justify-start"> github link(client):
                  <a
                    href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-shamimulhaque1992"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-800"
                  >
                    Visite the git repo.
                  </a>
                </div>
                <div className="card-actions justify-start"> github link(server):
                  <a
                    href="https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-shamimulhaque1992"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-800"
                  >
                    Visite the git repo.
                  </a>
                </div>
                <div className="card-actions justify-end">
                  <a
                    href="https://fragrance-warehouse-client.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn button-primary"
                  >
                    Visite The Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={fabric} alt="project" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Quiz App</h2>
                <p>
                  A quiz giving app where a user can signup and see some
                  tutorials and after watching tutorials they can give quiz on
                  that particular topic.
                </p>

                <div className="card-actions justify-start"> github link:
                  <a
                    href="https://github.com/shamimulhaque1992/Quiz--App"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-800"
                  >
                    Visite the git repo.
                  </a>
                </div>
                <div className="card-actions justify-end">
                  <a
                    href="https://quick-quiz-with-kashfee.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn button-primary"
                  >
                    Visite The Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={fps} alt="project" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Click-Life</h2>
                <p>A website of a personal photographer who can takes order from client adn gives service.</p>
                <div className="card-actions justify-start"> github link:
                  <a
                    href="https://github.com/programming-hero-web-course-4/independent-service-provider-shamimulhaque1992"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-blue-800"
                  >
                    Visite the git repo.
                  </a>
                </div>

                <div className="card-actions justify-end">
                  <a
                    href="https://personal-photographer-d3808.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn button-primary"
                  >
                    Visite The Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
