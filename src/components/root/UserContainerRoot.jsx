import React from 'react';
import ProfileNavigation from "../profile/navigation/ProfileNavigation";


const UserContainerRoot = ({ children }) => (
    <div className="wrapper">
        <ProfileNavigation/>
        {children}
    </div>
);


UserContainerRoot.defaultProps = {
  children: null,
};

export default UserContainerRoot;
