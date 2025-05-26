import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  const transactionTableRow = items.map(({ id, type, amount, currency }) => (
    <tr className={styles.tableRow} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <table className={styles.tableTransaction}>
      <thead className={styles.headTable}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionTableRow}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TransactionHistory;