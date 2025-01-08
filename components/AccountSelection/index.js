import styles from "./style.module.css";

const AccountSelection = ({ accounts, selectedAccount, onAccountSelect }) => {
    return (
      <div className={styles.accountSelection}>
        <h3>Select Your Account</h3>
        {accounts.length === 0 ? (
          <p>No accounts found. Please add an account.</p>
        ) : (
          <ul>
            {accounts.map((account) => (
              <li
                key={account.id}
                onClick={() => onAccountSelect(account)}
                className={selectedAccount?.id === account.id ? 'selected' : ''}
                aria-selected={selectedAccount?.id === account.id}
              >
                {account.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default AccountSelection;
  