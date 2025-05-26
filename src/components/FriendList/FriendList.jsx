
import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.friendItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
