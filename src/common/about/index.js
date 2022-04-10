import { React, Component, Fragment } from "react";
import "./index.css";
import phone from "../../images/burger.png";

class About extends Component {
  render() {
    return (
      <Fragment>
        <section className="about" id="about">
          <div className="row">
            <div className="co150">
              <h2 className="titleText">
                <span>A</span>bout Us
              </h2>
              <p className="content">
                Poki Mall is an online shopping App by Pocket Buy Inc.,
                specializing on Japanese/Korean Skin Care, Cosmetics and
                Lifestyle.
              </p>
              <br />
              <br />
              <p className="content">
                Brief Introduction: Pocket Buy Inc is devoted to take the online
                shopping experience to the next level. We pick the right things
                for you, so you don’t have to. Our Poki Mall makes your life
                easier.
              </p>

              <br />
              <br />

              <p className="content">
                POKI
                MALL（中文名：口袋猫）是北美最专业的日韩正品购物APP商城。北美买日韩正品，就上POKI
                MALL。日韩精致好生活，就在你的身边。
                无论是最火的美妆护肤，还是精致实用的日常用品，在POKI
                MALL都可以一键带走。上万种知名药妆、零食、母婴、家居品牌入驻，授权证书APP内公示，100%正品保障。
              </p>
              <br />
              <br />
              <p className="content">
                内置贴心小助手在线答疑，无论是选货还是售后，时刻为你服务，购物全无后顾之忧。
              </p>
            </div>
            <div className="co150">
              <div className="imgBx">
                <img alt="phone" src={phone}></img>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;
