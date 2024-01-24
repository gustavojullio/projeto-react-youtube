import React, { useState } from 'react';
import {View } from 'react-native';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import mockPrincipal from './mocks/telaPrincipal';

const geral = () => {
  const [videos, setVideos] = useState(mockPrincipal);

  const cliqueCurtida = (videoId) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, liked: !video.liked } : video
      )
    );
  };

  const handleUnlike = (videoId) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, liked: false } : video
      )
    );
  };

  return (
    <View>
      <Tela1 videos={videos} setVideos={setVideos} cliqueCurtida={cliqueCurtida} />
      <Tela2 videosCurtidos={videos.filter((video) => video.liked)} handleUnlike={handleUnlike} />
    </View>
  );
};

export default geral;
