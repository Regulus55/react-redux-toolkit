import React from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const {userInfo} = useSelector(state => state.auth)
    console.log('userinfo',userInfo)

    return (
        <div>
            {userInfo.userName}
        </div>
    );
};

export default Profile;