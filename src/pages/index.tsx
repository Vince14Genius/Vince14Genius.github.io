import React from 'react';

import githubLogo from '../images/socialmedia-github.svg';
import instagramLogo from '../images/socialmedia-instagram.svg';
import youtubeLogo from '../images/socialmedia-youtube.svg';

function Index() {
  return (
    <main id="main-content" lang="en">
      <div className="main-width-wrapper">
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
        <div className="text-hello nav-aligned-width-wrapper">
          <hr className="standard-hr" />
        </div>
        <section className="text-hello">
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
        <section className="text-hello">
          <h2 className="text-hello"><span className="text-fancy">Languages</span></h2>
          <div className="language-chart">
            <div className="language-chart-header-column language-proficiency-native">Native</div>
            <div className="language-chart-data-column">
              <span className="language-tag">English</span>
              <span className="language-tag">中文</span>
            </div>
            <div className="language-chart-header-column language-proficiency-near-native">Near-Native</div>
            <div className="language-chart-data-column">
              <span className="language-tag">日本語</span>
            </div>
            <div className="language-chart-header-column language-proficiency-fluent">Advanced</div>
            <div className="language-chart-data-column">
            </div>
            <div className="language-chart-header-column language-proficiency-conversational">Conversational</div>
            <div className="language-chart-data-column">
              <span className="language-tag">Esperanto</span>
              <span className="language-tag">Español</span>
              <span className="language-tag">Français</span>
            </div>
            <div className="language-chart-header-column language-proficiency-beginner">Beginner</div>
            <div className="language-proficiency-secondary-tier language-chart-data-column">
              <span className="language-tag">Lingua Latīna</span>
              <span className="language-tag">한국어</span>
              <span className="language-tag">Ελληνικά</span>
              <span className="language-tag">Türkçe</span>
              <span className="language-tag">Bahasa Indonesia</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Index;