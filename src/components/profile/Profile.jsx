import React, {Component} from 'react';
import "./index.css"
import SimpleProfile from "./SimpleProfile";
import Blog from "./Blog";


const Profile = () => (
    <div className="profile">
        <div className="profile-info">
            <ul className="profile-action">
                <li>Блог</li>
                <li>Подписки</li>
                <li/>
                <li>Подписчики</li>
                <li>Достижения</li>
            </ul>
            <div className="profile-ava">
                <SimpleProfile style={{color: "#000000"}} />
            </div>
            <div className="profile-background">
                <img src="https://static.joandjudy.com/media/image/d4/39/f0/JO-JUDY_Wallpaper_December_Advent_02_Desktop5a2a76d1ebcd8.jpg" alt="" height="100%" width="100%"/>
            </div>
        </div>
        <Blog/>
    </div>
)
export default Profile;

