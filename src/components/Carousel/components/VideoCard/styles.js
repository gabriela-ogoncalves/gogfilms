import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  --card-width: 298px;
  --card-height: 197px;
  border: 2px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 var(--card-width);
  width: var(--card-width);
  height: var(--card-height);
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: all 0.5s;
  &:hover,
  &:focus {
    margin: 0 50px;
    transform: scale(1.4);
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
