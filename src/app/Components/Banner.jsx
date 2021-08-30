import {
  StyledBannerContainer,
  StyledBannerImage,
  StyledBannerCenterTContainer,
} from "./StyledComponents.style";
import { Link } from "react-router-dom";
import FoodImage from "../Resources/Images/food1.jpg";
const Banner = () => {
  return (
    <StyledBannerContainer>
      <StyledBannerImage src={FoodImage} alt="Food Image" />
      <StyledBannerCenterTContainer>
        Welcome to Food App <br /> <Link to="/home">&#8594;</Link>
      </StyledBannerCenterTContainer>
    </StyledBannerContainer>
  );
};

export default Banner;
