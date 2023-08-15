import React from "react";
import { blogData } from "../../Data/BlogData";

const BlogText = () => {
  return (
    <section id="article-all">
      <div id="article">
        <div className="author-info">
          <img src="./images/blog/author-pic1.png" alt="Author" />
          <h4>Written by: Michele Curry</h4>
        </div>
        <p>
          At FemFit, we believe that strength training is more than just a
          physical pursuit; it's an art form that allows women to harness their
          inner power and transform both their bodies and minds. Our dedicated
          Strength Coach, Angelina, is passionate about helping women discover
          the incredible benefits of strength training.
        </p>
        <p>
          <str>
            "Strength training isn't about simply lifting weights; it's a
            transformative experience that builds confidence, resilience, and a
            deep connection with your body. At FemFit, we take pride in creating
            a supportive environment where women can challenge themselves, break
            barriers, and witness their own growth."
          </str>
        </p>
        <div className="image-text">
          <p>
            Strength training provides a multitude of benefits for women. Not
            only does it enhance muscle tone and boost metabolism, but it also
            improves bone density, reduces the risk of injury, and helps in
            achieving a balanced physique. It's an essential component of
            overall health and well-being.
          </p>
          <img src="./images/blog/confident.jpeg" alt="" />
        </div>
        <p>
          Our strength training programs are designed with the unique needs of
          women in mind. We focus on proper form, progressive overload, and
          individualized workout plans to ensure that every woman can achieve
          her fitness goals safely and effectively. Whether you're a beginner or
          experienced, our team is here to guide you every step of the way.
        </p>
        <p>
          Join us at FemFit and experience the art of women's strength training.
          Embrace the journey, see the results, and become the strong,
          confident, empowered woman you're meant to be.
        </p>
        <div className="author-info-2">
          <img src="./images/blog/author-pic1.png" alt="Author" />
          <div className="author-more">
            <h2> Michele Curry</h2>
            <p>
              Michele Curry is a fitness enthusiast and a graduate of the
              University of Health Sciences, where she studied Exercise Science.
              With over 8 years of experience in health and wellness writing,
              she's passionate about sharing the transformative impact of
              fitness. Michele loves how FemFit empowers women to embrace their
              strength, both physically and mentally, fostering a community of
              growth and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogText;
