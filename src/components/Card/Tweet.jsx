import { useState } from 'react';
import {
  TweetBox,
  ContentBox,
  ImageBox,
  Logo,
  Line,
  AvatarBox,
  Circle,
  Avatar,
  DataList,
  DataItem,
  Name,
  Button,
  ButtonFollowing,
} from './Tweet.styled';
import logo from '../../images/logo.svg';
import picture from '../../images/picturebgr.png';
import circle from '../../images/ellipse.png';

export const Tweet = ({ name, tweets, followers, avatar, userId }) => {
  const user = JSON.parse(localStorage.getItem(`user${userId}`)) ?? false;
  const userFollowing = user.following;
  const [isFollowing, setIsFollowing] = useState(userFollowing);

  const handleBtn = userId => {
    const userObj = { userId, following: !isFollowing };
    localStorage.setItem(`user${userId}`, JSON.stringify(userObj));

    const userData = JSON.parse(localStorage.getItem(`user${userId}`));

    setIsFollowing(userData.following);

    const localFollowingUsers = JSON.parse(
      localStorage.getItem(`followingUsers`)
    );

    if (
      isFollowing &&
      JSON.parse(localStorage.getItem('followingUsers')).includes(userId)
    ) {
      const index = localFollowingUsers.indexOf(userId);
      localFollowingUsers.splice(index, 1);
      const newArr = Array.from(new Set(localFollowingUsers));
      localStorage.setItem('followingUsers', JSON.stringify(newArr));
    } else {
      localFollowingUsers.push(userId);

      localStorage.setItem(
        'followingUsers',
        JSON.stringify(localFollowingUsers)
      );
    }
  };

  const transformFollowersNumber = number => {
    const string = number.toString().split('');
    if (string.length > 6) {
      string.splice(-6, 0, ',');
    }
    string.splice(-3, 0, ',');

    string.join('');
    return string;
  };

  return (
    <TweetBox>
      <ContentBox>
        <ImageBox>
          <Logo src={logo} alt="logo" width="76" height="20"></Logo>
          <img src={picture} alt="background" width="308" height="168"></img>
        </ImageBox>
        <Line></Line>
        <AvatarBox>
          <Circle src={circle} alt="circle"></Circle>
          <Avatar src={avatar} alt="avatar" />
        </AvatarBox>
        <DataList>
          <DataItem>
            <Name>{name}</Name>
          </DataItem>
          <DataItem>
            <p>{tweets} Tweets</p>
          </DataItem>
          <DataItem>
            <p>
              {isFollowing
                ? transformFollowersNumber(followers + 1)
                : transformFollowersNumber(followers)}{' '}
              Followers
            </p>
          </DataItem>
        </DataList>
        {isFollowing ? (
          <ButtonFollowing onClick={() => handleBtn(userId)}>
            Following
          </ButtonFollowing>
        ) : (
          <Button type="button" onClick={() => handleBtn(userId)}>
            Follow
          </Button>
        )}
      </ContentBox>
    </TweetBox>
  );
};