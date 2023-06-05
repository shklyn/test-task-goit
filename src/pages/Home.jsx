import { useEffect } from 'react';
import image from '../images/hansel.png';
import { HeroTitle, HomeContainer, HeroImage } from './Home.styled';

const Home = () => {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('followingUsers'))) {
      return;
    }
    localStorage.setItem('followingUsers', JSON.stringify([]));
  }, []);

  return (
    <HomeContainer>
      <HeroTitle>Homepage</HeroTitle>
      <HeroImage src={image} alt="main image" width="250px"/>
    </HomeContainer>
  );
};

export default Home;