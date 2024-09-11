import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    const {userInfo} = useSelector(state => state.auth)
    console.log('userinfo',userInfo)

    // useEffect(()=>{
    //
    // },[userInfo])

    return (
        <div>
            {userInfo !== undefined ? userInfo?.email : userInfo?.body?.email  }
        </div>
    );
};

export default Profile;