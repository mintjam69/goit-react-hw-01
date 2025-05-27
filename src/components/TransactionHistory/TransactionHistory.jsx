import styles from "./TransactionHistory.module.css";


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


export default TransactionHistory;