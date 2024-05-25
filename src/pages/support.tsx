import React from 'react';
import { useState } from 'react';

function Support() {
  const [lang, setLang] = useState("en")

  let supportParagraph = <p className="multilang" lang="en">For those seeking support for any apps by Vince14Genius, or if you want to file a bug-report:</p>;
  switch(lang) {
    case("ja"): 
      supportParagraph = <p className="multilang" lang="ja">Vince14Geniusが開発したアプリに関するサポート・バグ報告・お問い合わせは下記メイルアドレス宛てにご連絡いただけます：</p>;
      break;
    case("eo"):
      supportParagraph = <p className="multilang" lang="eo">Se vi bezonas subtenon por programetoj de Vince14Genius, aŭ se vi volas sendi cimo-raportojn:</p>;
      break;
    case("zh-Hans"):
      supportParagraph = <p className="multilang" lang="zh-Hans">在使用 Vince14Genius 的 App 时遇到问题可联系以下邮箱：</p>;
      break;
    case("zh-Hant"):
      supportParagraph = <p className="multilang" lang="zh-Hant">使用 Vince14Genius 的 App 時如果遇到問題可以聯繫以下電郵：</p>;
      break;
    default: break;
  }

  return (
    <main id="main-content">
      <div className="nav-aligned-width-wrapper">
        <h1 className="text-fancy">Support/サポート/Subteno/支持/支援</h1>
        <select 
          id="select-language" 
          name="Language"
          value={lang}
          onChange={e => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="eo">Esperanto</option>
          <option value="zh-Hans">简体中文</option>
          <option value="zh-Hant">繁體中文</option>
        </select>

        {supportParagraph}
        
        <p><strong>Email <a href="mailto:vince14genius@protonmail.com">vince14genius@protonmail.com</a></strong></p>
      </div>
    </main>
  );
}

export default Support;