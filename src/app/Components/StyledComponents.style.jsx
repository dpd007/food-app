import styled from "styled-components";

export const StyledBannerContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: center;
  color: white;
`;

export const StyledBannerImage = styled.img`
  overflow: hidden;
  width: 100%;
  height: 99.6vh;
  opacity: 0.6;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
export const StyledBannerCenterTContainer = styled.div`
  position: absolute;
  overflow-y: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  & a{
      color: #fff;
      text-decoration: none;
  }
`;
