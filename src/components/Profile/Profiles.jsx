import React from "react";
import styles from "./Profile.module.css";


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



export default Profile;