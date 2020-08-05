/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import VideoCardContainer from './styles';

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000000e9',
    borderRadius: '10px',
    padding: '20px',
  },
  overlay: {
    backgroundColor: '#000000e3',
  },
};

const closeIconStyle = {
  fontSize: 30,
  color: 'white',
};

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const CloseButton = styled.div`
  display: flexbox;
  align-items: flex-end;
  justify-content: end;
`;
  const A = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding-top: 10px;
  `;

  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const url = `${videoURL.replace('watch?v=', 'embed/')}?autoplay=1&showinfo=0&controls=2&fs=0`;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <VideoCardContainer
        url={image}
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
        onClick={openModal}
      >
        <span style={{ backgroundColor: categoryColor, opacity: '0.95' || 'white' }}>
          {videoTitle}
        </span>
      </VideoCardContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={videoTitle}
        style={modalStyles}
      >
        <CloseButton>
          <CloseIcon
            onClick={() => setModalIsOpen(false)}
            style={closeIconStyle}
          />
        </CloseButton>
        <div>
          <iframe
            src={url}
            title={videoTitle}
            controls="5"
            showinfo="0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            height="250"
            width="500"
          />
        </div>
        <A>
          <a href={videoURL} target="_blank" rel="noopener noreferrer">
            Assistir no YouTube
          </a>
        </A>
      </Modal>
    </>
  );
}

export default VideoCard;
