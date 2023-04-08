import Watchthedemo from "@/public/assets/Watchthedemo";
import { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function WhyPrefect() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const handleButtonClick = () => {
    setModalIsOpen(true);
    // Call YouTube Data API to fetch the video ID
    setVideoId("ZK1s8OfVSpY");
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setVideoId(null);
  };

  const handleVideoReady = (event: { target: { playVideo: () => void } }) => {
    event.target.playVideo();
  };

  return (
    <div className="flex flex-col mt-44 contain sm:mt-50">
      <h3 className="why-prefect text-base py-8 font-input text-[#0052ff]">
        WHY PREFECT
      </h3>
      <div className="featured-video">
        <div className="gradient-3 absolute object-cover w-full h-full">
          <svg
            width="221"
            height="312"
            viewBox="0 0 221 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="constellation"
            data-v-70ebf7ad=""
          >
            <path
              d="M1.00289 311L214.945 209.377"
              stroke="url(#paint0_linear)"
              strokeOpacity="0.4"
              strokeWidth="2"
            ></path>
            <path
              d="M1.00289 209.377L214.945 107.755"
              stroke="url(#paint1_linear)"
              strokeOpacity="0.4"
              strokeWidth="2"
            ></path>
            <path
              d="M1.00094 107.755L214.943 6.132"
              stroke="url(#paint2_linear)"
              strokeOpacity="0.4"
              strokeWidth="2"
            ></path>
            <circle
              cx="214.943"
              cy="6"
              r="6"
              transform="rotate(180 214.943 6)"
              fill="white"
              fillOpacity="0.2"
            ></circle>
            <circle
              cx="214.943"
              cy="6"
              r="3"
              transform="rotate(180 214.943 6)"
              fill="url(#paint3_linear)"
            ></circle>
            <circle
              cx="214.943"
              cy="108"
              r="6"
              transform="rotate(180 214.943 108)"
              fill="white"
              fillOpacity="0.2"
            ></circle>
            <circle
              cx="214.943"
              cy="108"
              r="3"
              transform="rotate(180 214.943 108)"
              fill="url(#paint4_linear)"
            ></circle>
            <circle
              cx="214.945"
              cy="209"
              r="6"
              transform="rotate(180 214.945 209)"
              fill="white"
              fillOpacity="0.2"
            ></circle>
            <circle
              cx="214.945"
              cy="209"
              r="3"
              transform="rotate(180 214.945 209)"
              fill="url(#paint5_linear)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="107.974"
                y1="311"
                x2="107.974"
                y2="209.377"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="107.974"
                y1="209.377"
                x2="107.974"
                y2="107.755"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="107.972"
                y1="107.755"
                x2="107.972"
                y2="6.13201"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear"
                x1="212.843"
                y1="3.9"
                x2="217.043"
                y2="8.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear"
                x1="212.843"
                y1="105.9"
                x2="217.043"
                y2="110.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear"
                x1="212.845"
                y1="206.9"
                x2="217.045"
                y2="211.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="gradient-4 absolute object-cover w-full h-full">
          <svg
            width="221"
            height="211"
            viewBox="0 0 221 211"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="constellation"
            data-v-70ebf7ad=""
          >
            <path
              d="M219.942 1.62277L6.00002 103.245"
              stroke="url(#paint0_linear)"
              strokeOpacity="0.4"
              strokeWidth="2"
            ></path>
            <path
              d="M219.944 103.245L6.00197 204.868"
              stroke="url(#paint1_linear)"
              strokeOpacity="0.4"
              strokeWidth="2"
            ></path>
            <circle
              cx="6.00195"
              cy="205"
              r="6"
              fill="white"
              fillOpacity="0.2"
            ></circle>
            <circle
              cx="6.00195"
              cy="205"
              r="3"
              fill="url(#paint2_linear)"
            ></circle>
            <circle
              cx="6.00195"
              cy="103"
              r="6"
              fill="white"
              fillOpacity="0.2"
            ></circle>
            <circle
              cx="6.00195"
              cy="103"
              r="3"
              fill="url(#paint3_linear)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="112.971"
                y1="1.62278"
                x2="112.971"
                y2="103.245"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="112.973"
                y1="103.245"
                x2="112.973"
                y2="204.868"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="3.90195"
                y1="202.9"
                x2="8.10195"
                y2="207.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear"
                x1="3.90195"
                y1="100.9"
                x2="8.10195"
                y2="105.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#91EBFF"></stop>
                <stop offset="1" stopColor="#8497FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-[#fff] p-8 featured-video--content flex lg:items-start items-center lg:flex-row flex-col">
          <figure
            className="lg:mr-12 mx-auto flex-1 cursor-pointer mt-16 relative videoFigure"
            data-v-70ebf7ad=""
          >
            <img
              alt="Click to play video"
              src="https://images.ctfassets.net/gm98wzqotmnx/5Y8hd4xXNQpxoGLzv3qPjo/fa6fcf5b6f04f560d20c2c6f787b1a8b/prefect2video.jpeg"
              className="main-image rounded-lg"
              data-v-70ebf7ad=""
            />
            <figcaption onClick={handleButtonClick}>
              <Watchthedemo />
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
              >
                {videoId && (
                  <YouTube videoId={videoId} onReady={handleVideoReady} />
                )}
              </Modal>
              {/* <Youtube /> */}
            </figcaption>
          </figure>
          <div className="md:pt-6  md:mt-22 featured-video--text lg:text-left text-center flex-1">
            <h4
              className="hidden font-barlow pb-3 text-[48px] lg:block featured-video--title mx-auto lg:mt-0 lg:mx-0"
              style={{
                letterSpacing: "-0.02em",
                lineHeight: "1.1em",
              }}
            >
              Cloud convenience
              <br data-v-70ebf7ad="" />
              with on-prem security
            </h4>
            <h5 className="lg:hidden pb-7 font-bold font-barlow text-[30px] featured-video--title mx-auto mt-8 lg:mt-0 lg:mx-0">
              Cloud convenience
              <br data-v-70ebf7ad="" />
              with on-prem security
            </h5>
            <div className="featured-video--description lg:mx-0 mx-auto pb-6">
              <p data-v-70ebf7ad="">
                Prefect is a
                <span className="text-[#35c88a] px-1">
                  modern workflow orchestration tool
                </span>
                for coordinating all of your data tools. Orchestrate and observe
                your dataflow using Prefect's open source Python library, the
                glue of the modern data stack. Scheduling, executing and
                visualizing your data workflows has never been easier.
              </p>
            </div>
            <a href="" target="_blank">
              <button className="btn-1 btn relative prefect-button">
                START FREE
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
