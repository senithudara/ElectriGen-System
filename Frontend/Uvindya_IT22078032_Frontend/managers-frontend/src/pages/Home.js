import React, { useEffect, useState } from "react";
import { useAccountsContext } from "../hooks/useAccountsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// Components
import AccountDetails from '../components/AccountDetails';
import AccountForm from '../components/AccountForm';

const Home = () => {
    const { accounts, dispatch } = useAccountsContext();
    const { user } = useAuthContext()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await fetch('/api/accounts', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_ACCOUNTS', payload: json });
                }
            } catch (error) {
                console.error('Error fetching accounts:', error);
            }
        };

        if (user) {
            fetchAccounts();
        }

    }, [dispatch, user]);

    const handleDelete = async (id) => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/accounts/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Filter out the deleted account from the accounts state
                dispatch({ type: 'DELETE_ACCOUNT', payload: id });
            } else {
                console.error('Failed to delete account');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdate = async (id) => {
        // Handle update logic, e.g., navigate to update page or show a modal
        console.log('Update account with ID:', id);
    };

    return (
        <div className="home">
            <div className="accounts">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    accounts && accounts.map((account) => (
                        <AccountDetails
                            key={account._id}
                            account={account}
                            onDelete={() => handleDelete(account._id)}
                            onUpdate={() => handleUpdate(account._id)}
                        />
                    ))
                )}
            </div>
            <AccountForm />
        </div>
    );
};

export default Home;
