import React from "react";
import heroImage from "../assets/images/hero.jpg";
export default function Hero() {
  return (
    <div className="hero text-center">
      <div className="title">
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </div>
      <figure className="hero-image-container">
        <img className="hero-image image-fluid" src={heroImage} alt="" />
      </figure>
      <p className="ff-poppins p-1">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <button className="text-center btn btn-primary">Visit Website</button>
    </div>
  );
}
