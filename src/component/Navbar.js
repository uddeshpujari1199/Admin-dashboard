import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import profile from './../Assets/Profile.webp'

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Serch....." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icons" />
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icons" />
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className="icons" />
          </div>

          <div className="item">
            <NotificationsActiveIcon className="icons" />
          </div>

          <div className="item">
            <MarkChatUnreadOutlinedIcon className="icons" />
          </div>

          <div className="item">
            <FormatListBulletedOutlinedIcon className="icons" />
          </div>
          <div className="item">
           <img src={profile} alt="profile" className="avtar"></img>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
