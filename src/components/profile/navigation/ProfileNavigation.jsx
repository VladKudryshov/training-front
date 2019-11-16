import React from 'react';
import './index.css';
import SimpleProfile from "../SimpleProfile";
import NavigationProfileMenu from "../../../components/menu/NavigationProfileMenu";


const ProfileNavigation = () => (
    <div className="profile-navigation simple-card gap">
        <div className="cl2r1">
            <div className="card-name">INFO</div>
            <div className="account-type">PRO</div>
        </div>
        <SimpleProfile/>
        <NavigationProfileMenu/>
    </div>
)
export default ProfileNavigation;

