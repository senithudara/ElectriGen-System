import { useEffect } from 'react';
import { useAccountsContext } from '../hooks/useAccountContext';

// Components
import AccountDetails from '../components/AccountDetails';
import AccountForm from '../components/AccountForm';

const Home = () => {
  const { accounts, dispatch } = useAccountsContext();

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await fetch('/api/accounts');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_ACCOUNTS', payload: json });
      }
    };

    fetchAccounts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="accounts">
        {accounts && accounts.map((account) => (
          // Add a null check before accessing account._id
          account && <AccountDetails account={account} key={account._id} />
        ))}
      </div>
      <AccountForm />
    </div>
  );
};

export default Home;
