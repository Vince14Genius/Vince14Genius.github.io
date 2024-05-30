import React from 'react';

import githubLogo from '../images/socialmedia-github.svg';
import instagramLogo from '../images/socialmedia-instagram.svg';
import youtubeLogo from '../images/socialmedia-youtube.svg';

function Index() {
  return (
    <main id="main-content" lang="en">
      <div className="main-width-wrapper">
        <section className="full-page-height">
          <section className="text-hello">
            <p className="text-hello"><span className="text-fancy">Welcome</span></p>
            <p className="text-hello">to my portfolio.</p>
          </section>
          <section className="social-media-section noselect">
            <h2 className="compatibility-hidden">Social Media</h2>
            <p className="centered-block">
              <a className="social-media-link" href="https://github.com/Vince14Genius">
                <img alt="GitHub" src={githubLogo} />
              </a>

              <a className="social-media-link" href="https://www.instagram.com/vince14genius_0/">
                <img alt="Instagram" src={instagramLogo} />
              </a>

              <a className="social-media-link" href="https://youtube.com/@vince14genius">
                <img alt="YouTube" src={youtubeLogo} />
              </a>
            </p>
          </section>
        </section>
        <div className="text-hello nav-aligned-width-wrapper">
          <hr className="standard-hr" />
        </div>
        <section className="text-hello full-page-height">
          <h2 className="compatibility-hidden">Summary</h2>
          <p className="text-hello">
            <span className="text-fancy">
              Code.
            </span>
          </p>
          <p className="text-hello">
            <span className="text-fancy">
              Design.
            </span>
          </p>
          <p className="text-hello">
            <span className="text-fancy">
              Linguistics.
            </span>
          </p>
          <p className="text-hello">
            and more.
          </p>
        </section>
        <div className="text-hello nav-aligned-width-wrapper">
          <hr className="standard-hr" />
        </div>
        <section className="text-hello full-page-height">
          <h2 className="text-hello"><span className="text-fancy">Languages</span></h2>
          <div className="language-chart">
            <div className="language-chart-header-column language-proficiency-native">Native</div>
            <div className="language-chart-data-column">
              <span className="language-tag-container">
                <div className="language-tag">English</div>
              </span>
              <span className="language-tag-container">
                <div className="language-tag">中文</div>
              </span>
            </div>
            <div className="language-chart-header-column language-proficiency-near-native">Near-Native</div>
            <div className="language-chart-data-column">
              <span className="language-tag-container">
                <div className="language-tag">日本語</div>
              </span>
            </div>
            <div className="language-chart-header-column language-proficiency-fluent">Advanced</div>
            <div className="language-chart-data-column">
            </div>
            <div className="language-chart-header-column language-proficiency-conversational">Conversational</div>
            <div className="language-chart-data-column">
              <span className="language-tag-container">
                <div className="language-tag">Esperanto</div>
              </span>
              <span className="language-tag-container">
                <div className="language-tag">Español</div>
              </span>
              <span className="language-tag-container">
                <div className="language-tag">Français</div>
              </span>
            </div>
            <div className="language-chart-header-column language-proficiency-beginner">Beginner</div>
            <div className="language-proficiency-secondary-tier language-chart-data-column">
              <span className="language-tag-container">
                <div className="language-tag">Lingua Latīna</div>
              </span>
              <span className="language-tag-container">
                <div className="language-tag">한국어</div>
              </span>
              <span className="language-tag-container">
                <div className="language-tag">Ελληνικά</div>
              </span>
              <span className="language-tag-container">
                <div className="language-tag">Türkçe</div>
              </span>
              <span className="language-tag-container">
                <div className="language-tag">Bahasa Indonesia</div>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Index;