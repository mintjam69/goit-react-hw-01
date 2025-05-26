import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.avatarContainer}>
        <img className={styles.image} src={image} alt="Profile avatar" />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.username}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.socialItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.socialItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  location: "Unknown",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;