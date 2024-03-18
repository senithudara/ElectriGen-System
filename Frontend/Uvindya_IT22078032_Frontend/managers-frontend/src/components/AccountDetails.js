import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useAccountsContext } from '../hooks/useAccountsContext';

const AccountDetails = ({ account }) => {
  // Get dispatch function from useAccountsContext hook
  const { dispatch } = useAccountsContext(); 

  // Get user data from useAuthContext hook
  const { user } = useAuthContext();

  // Function to handle deletion of account
  const handleDelete = async () => {
    if (!user) {
      return; // If user is not logged in, do nothing
    }

    try {
      // Send a DELETE request to delete the account
      const response = await fetch('/api/accounts/' + account._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}` // Include user's token for authorization
        }
      });

      if (response.ok) {
        // If account deletion is successful, dispatch action to update context state
        dispatch({ type: 'DELETE_ACCOUNT', payload: account._id });
      } else {
        console.error('Failed to delete account');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  // Define container style
  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px'
  };

  // Define strong element style
  const strongStyle = {
    // Define your strong style here
  };

  // Define button style
  const buttonStyle = {
    // Define your button style here
  };

  return (
    <div style={containerStyle}>
      {/* Display account details */}
      <p><strong style={strongStyle}>First Name:</strong>{account.fname}</p>
      <p><strong style={strongStyle}>Last Name:</strong>{account.lname}</p>
      <p><strong style={strongStyle}>Manager Id:</strong>{account.id}</p>
      <p><strong style={strongStyle}>dob:</strong>{account.dob}</p>
      <p><strong style={strongStyle}>Email:</strong>{account.email}</p>
      <p><strong style={strongStyle}>Contact No:</strong>{account.contactNo}</p>
      <p><strong style={strongStyle}>Role:</strong>{account.role}</p>
      <p>{account.createdAt}</p>

      {/* Button to delete account */}
      <button style={buttonStyle} onClick={handleDelete}>Delete Account</button>

      {/* Link to edit account details */}
      <Link to={`/update-details/${account._id}`}>
        <button style={buttonStyle}>Edit Account</button>
      </Link>
    </div>
  );
};

export default AccountDetails;
