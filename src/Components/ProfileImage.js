import React, { useEffect, useState } from 'react';

function ProfileImage() {
  const [profileImageUrl, setProfileImageUrl] = useState('');

  useEffect(() => {
    const randomImageId = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/id/${randomImageId}/200/200`;
    setProfileImageUrl(imageUrl);
  }, []);

  return (
    <img src={profileImageUrl} alt="Profile" />
  );
}

export default ProfileImage;