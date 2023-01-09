import React from "react";
import "./profile-card.scss";
import Stat from "./stat";

const ProfileCard = (props) => {
  const { avatar, name, location, shot, followers, following } = props;

  const image = require(`../../assets/img/${avatar}`);
  const profileBg = { backgroundImage: `url(${image})`};

  return (
    <div className="profile-card">
      <div className="header" style={profileBg}></div>
      <div className="content">
        <div className="avatar" style={profileBg}></div>

        <h2>{name}</h2>
        <h4>{location}</h4>

        <div className="stats">
          <Stat name="Shot" value={shot} />
          <Stat name="Followers" value={followers} />
          <Stat name="Following" value={following} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
