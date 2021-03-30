import React from "react";
import "./navpanel.style.css";
import Spotify from "../../assests/logo.png";
import HomeIcon from "../../assests/home.png";
import SearchIcon from "../../assests/search.png";
import LibraryIcon from "../../assests/books.png";
import AddIcon from "../../assests/add.png";
import HeartIcon from "../../assests/heart.png";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function NavPanel({ userName, playList }) {
  //Chose the active tab and change its background color
  //store list of nav links
  console.log(playList.length);
  const navLinks = [
    {
      id: 1,
      route: "/",
      routeTitle: "Home",
      icon: HomeIcon,
    },
   
    {
      id: 4,
      route: "/CreatePlaylist",
      routeTitle: "Create Playlist",
      icon: AddIcon,
    },
   
  ];
  var currentRoute = useLocation().pathname;

  return (
    <div className="vertical-navbar-container">
      <div className="vertical-navbar-container-title">
        <img src={Spotify} width="120px" alt='logo'/>
      </div>
      <nav>
        {navLinks.map((link) => {
          return (
            <div key={link.id}
              className={link.route === currentRoute ? "active-nav-tab" : ""}
            >
              <li className={link.id === 4 ? "seperate-nav" : ""}>
                <Link
                  to={link.route}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <div className="nav-flexbox">
                    <div>
                      <img src={link.icon} width="20px" height="20px"alt='somedata' />
                    </div>
                    <div className="nav-link-title" key={link.id}>
                      {link.routeTitle}
                    </div>
                  </div>
                </Link>
              </li>
            </div>
          );
        })}
        <hr></hr>
        <div className="playlist-user">
          {playList.length === 0 ? (
            <div style={{ color: "gray", fontSize: "14px", fontWeight: "500" }}>
              Click on create playlist :)
            </div>
          ) : (
            <div>
              {playList.map(({ PlayList_id, PlayList_name }) => {
                return (
                  <li key={PlayList_id}>
                    <Link style={{ color: "white", textDecoration: "none" }} to={`/playlists/${PlayList_id}`}>
                      <div className="nav-flexbox">
                        <div className="nav-link-title" key={PlayList_id}>
                          {PlayList_name}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = ({ user: { userName, playList } }) => ({
  userName,
  playList,
});

export default connect(mapStateToProps, null)(NavPanel);
