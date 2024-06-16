import Box from "./Box";
import styles from "./Styles/transactions.module.css";

const Transactions = () => {
    const transactions = [
        { type: "deposit", amount: "$200", date: "2024-06-01", status: "success" },
        { type: "withdrawal", amount: "$100", date: "2024-06-02", status: "pending" },
        { type: "deposit", amount: "$150", date: "2024-06-03", status: "failed" },
        // Add more transactions as needed
      ];
  const getStatusClass = (status) => {
    switch (status) {
      case "success":
        return styles.success;
      case "pending":
        return styles.pending;
      case "failed":
        return styles.failed;
      default:
        return "";
    }
  };

  return (
    <Box title="Recent Transactions">
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Transaction Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td className={getStatusClass(transaction.status)}>
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default Transactions;
