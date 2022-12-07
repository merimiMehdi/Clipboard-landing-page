import React from "react";
import logo from "./images/logo.svg";
import pc from "./images/image-computer.png";
import phoneTab from "./images/image-devices.png";
import blacklist from "./images/icon-blacklist.svg";
import snippets from "./images/icon-text.svg";
import preview from "./images/icon-preview.svg";
import google from "./images/logo-google.png";
import ibm from "./images/logo-ibm.png";
import microsoft from "./images/logo-microsoft.png";
import hewlett from "./images/logo-hp.png";
import vector from "./images/logo-vector-graphics.png";
export default class Site extends React.Component {
  render() {
    return (
      <div className="website">
        <header>
          <div className="logoCopy">
            <img src={logo} alt="copy" width={100} height={100} />
          </div>
          <div className="gap1">
            <div className="H1_P">
              <h1>A history of everything you copy</h1>
              <p>
                Clipboard allows you to track and organize everything you copy.
                Instantly acceess your clipboard on all your devices.
              </p>
            </div>
            <div className="btns">
              <button className="iosBtn">Download for ios</button>
              <button className="macBtn">Download for mac</button>
            </div>
          </div>
        </header>
        <main>
          <div className="text2emeMain">
            <h1>Keep track of your snippets</h1>
            <p>
              Clipboard allows you to track and organize everything you copy.
              Instantly acceess your clipboard on all your devices. Our Mac and
              ios apps will help you organize everything.{" "}
            </p>
          </div>
          <div className="pcAvecKtbate">
            <div className="pcGaucheMain">
              <img src={pc} alt="px" width={670} height={500} />
            </div>
            <div className="TextsDroitePc">
              <div className="quickSearch">
                <h1>Quick Search</h1>
                <p>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div className="iCloudSync">
                <h1>iCloud Sync</h1>
                <p>
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div className="completeHistory">
                <h1>Complete History</h1>
                <p>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
          <div className="phoneTab">
            <div className="textsPhoneTab">
              <h1>Acess Clipboard anywhere</h1>
              <p>
                Whether hou're on the go, or at your computer, you can access
                all your Clipbord snippets in a few simple clicks.
              </p>
            </div>
            <div className="picturePhoneTab">
              <img src={phoneTab} alt="phoneTab" width={670} height={500} />
            </div>
          </div>
          <div className="main3eme">
            <div className="textsSuper">
              <h1>Supercharge your workflow</h1>
              <p>We've got the tools to boost your productivity.</p>
            </div>
            <div className="symbolesWithTexts">
              <div className="blacklist">
                <img src={blacklist} alt="blacklist" height={30} width={30} />
                <h3>Create blacklists</h3>
                <p>
                  Ensure sensitive information never makes its way to your
                  clipboard by excluding certain sources.
                </p>
              </div>
              <div className="snippets">
                <img src={snippets} alt="snippets" height={30} width={30} />
                <h3>Plain text snippets</h3>
                <p>
                  Remove unwanted formatting from copied text for a consistent
                  look.
                </p>
              </div>
              <div className="preview">
                <img src={preview} alt="preview" height={30} width={30} />
                <h3>Sneak preview</h3>
                <p>
                  Quick preview of all snippets on your Clipboard for easy
                  access.
                </p>
              </div>
            </div>
          </div>
          <div className="main4eme">
            <img src={google} alt="google" height={40}/>
            <img src={ibm} alt="ibm" height={40}/>
            <img src={microsoft} alt="microsoft" height={40}/>
            <img src={hewlett} alt="hewlett" height={40}/>
            <img src={vector} alt="vector" height={40}/>
          </div>
          <div className="main5eme">
            <div className="clipbordFinal">
              <h1>Clipboard for iOS and Mac OS</h1>
              <p>
                Available for free on the App Store. Download for Mac or iOS,
                sync with iCloud and you’re ready to start adding to your
                clipboard.
              </p>
            </div>
            <div className="btns">
              <button className="iosBtn">Download for ios</button>
              <button className="macBtn">Download for mac</button>
            </div>
          </div>
        </main>
        <footer>
          <div className="logoFooter">
            <img src={logo} alt="copy" width={30} height={30} />
          </div>
          <div className="parFooter">
            <div className="faqsOlifsstro">
              <p>FAQS</p>
              <p>Privacy Policy</p>
              <p>Instal Guide</p>
            </div>
            <div className="conatctUsOlifsstro">
              <p>Contact Us</p>
              <p>Press Kit</p>
            </div>
          </div>
          <div className="icons">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                fill="#4C545C"
                fill-rule="nonzero"
              />
            </svg>

            <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                fill="#4C545C"
                fill-rule="nonzero"
              />
            </svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                fill="#4C545C"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </footer>
        <p class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">MERIMI Mehdi</a>.
        </p>
      </div>
    );
  }
}
