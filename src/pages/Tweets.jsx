import { useLocation } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Tweet } from 'components/Card/Tweet';
import {
  BackLink,
  TweetsContainer,
  TweetsGallery,
  LoadMoreBtn,
  TitleIfNoFollowings,
} from './Tweets.styled';
import { fetchUsers } from 'api/api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [threeElementsToRender, setThreeElementsToRender] = useState(3);
  const [showText, setShowText] = useState(false);
  const [dataFromApi, setDataFromApi] = useState([]);

  const location = useLocation();
  const pathToBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fetchUsers();
        if (!data.length) {
          Notify.error('Oops, something went wrong.');
          return;
        }

        setDataFromApi(data);

        const firstThreeElements = data.slice(0, threeElementsToRender);
        const filteredData = dataNormalizer(firstThreeElements);

        if (!filteredData.length) {
          Notify.error("Oops, There's no tweets");
          return;
        }

        setUsers(filteredData);
        setShowButton(threeElementsToRender < data.length);
        if (users.length === data.length) {
          Notify.info("Oops! There's no more tweets");
        }
      } catch (e) {
        Notify.error('Oops, something went wrong.');
        console.log(e.message);
      }
    };

    fetchData();
  }, [threeElementsToRender]);

  useEffect(() => {
    setShowText(false);
    setShowButton(users.length < dataFromApi.length);
  }, [users, dataFromApi]);

  const dataNormalizer = arr => {
    return arr.map(({ id, user, tweets, followers, avatar }) => ({
      id,
      user,
      tweets,
      followers,
      avatar,
    }));
  };

  const counterForData = () => {
    setThreeElementsToRender(prevState => prevState + 3);
  };

  return (
    <TweetsContainer>
      <BackLink to={pathToBack.current}>
        <FaChevronLeft />
        Back
      </BackLink>
      <TweetsGallery>
        {users.map(({ id, user, tweets, followers, avatar }) => (
          <Tweet
            key={id}
            name={user}
            followers={followers}
            tweets={tweets}
            avatar={avatar}
            userId={id}
          />
        ))}
      </TweetsGallery>
      {showButton && (
        <LoadMoreBtn type="button" onClick={counterForData}>
          Load More
        </LoadMoreBtn>
      )}
      {showText && (
        <TitleIfNoFollowings>
          Oops, it seems you still don't follow anybody.
        </TitleIfNoFollowings>
      )}
    </TweetsContainer>
  );
};

export default Tweets;