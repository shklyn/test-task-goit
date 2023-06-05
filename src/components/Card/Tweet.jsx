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
  const user = JSON.parse(localStorage.getItem(`user${userId}`)) ?? { following: false };
  const [isFollowing, setIsFollowing] = useState(user.following);

  const handleBtn = () => {
    const userObj = { following: !isFollowing };
    localStorage.setItem(`user${userId}`, JSON.stringify(userObj));

    setIsFollowing(!isFollowing);

    const localFollowingUsers = JSON.parse(localStorage.getItem('followingUsers')) || [];

    if (isFollowing) {
      const index = localFollowingUsers.indexOf(userId);
      if (index > -1) {
        localFollowingUsers.splice(index, 1);
      }
    } else {
      localFollowingUsers.push(userId);
    }

    localStorage.setItem('followingUsers', JSON.stringify(localFollowingUsers));
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
          <Logo src={logo} alt="logo" width="76" height="20" />
          <img src={picture} alt="background" width="308" height="168" />
        </ImageBox>
        <Line />
        <AvatarBox>
          <Circle src={circle} alt="circle" />
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
              {transformFollowersNumber(isFollowing ? followers + 1 : followers)} Followers
            </p>
          </DataItem>
        </DataList>
        {isFollowing ? (
          <ButtonFollowing onClick={handleBtn}>Following</ButtonFollowing>
        ) : (
          <Button type="button" onClick={handleBtn}>Follow</Button>
        )}
      </ContentBox>
    </TweetBox>
  );
};