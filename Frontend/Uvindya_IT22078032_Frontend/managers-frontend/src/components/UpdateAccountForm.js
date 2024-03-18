import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateAccountForm = () => {
  const { accountId } = useParams();
  const [account, setAccount] = useState({
    fname: '',
    lname: '',
    id: '',
    dob: '',
    email: '',
    contactNo: '',
    role: ''
  });

  useEffect(() => {
    // Fetch account details based on accountId
    const fetchAccountDetails = async () => {
      try {
        const response = await fetch(`/api/accounts/${accountId}`);
        if (response.ok) {
          const data = await response.json();
          setAccount(data); // Set account details
        } else {
          console.error('Failed to fetch account details');
        }
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };

    fetchAccountDetails();
  }, [accountId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send updated account details to server
    try {
      const response = await fetch(`/api/accounts/${accountId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account)
      });
      if (response.ok) {
        // Handle success
        console.log('Account details updated successfully');
      } else {
        console.error('Failed to update account details');
      }
    } catch (error) {
      console.error('Error updating account details:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <label>Manager ID:</label>
      <input type="text" name="id" value={account.id} onChange={handleChange} />

      <label>Contact Number:</label>
      <input type="text" name="contactNo" value={account.contactNo} onChange={handleChange} />

      <label>Role:</label>
      <select name="role" value={account.role} onChange={handleChange}>
      <option value="Inventory Manager">Inventory Manager</option>
        <option value="Distributor Manager">Distributor Manager</option>
        <option value="Showroom Manager">Showroom Manager</option>
        <option value="Donation Manager">Donation Manager</option>
        <option value="Export Manager">Export Manager</option>
        <option value="Supplier Manager">Supplier Manager</option>
        <option value="User Manager">User Manager</option>
      </select>

      <button type="submit">Update Account</button>
    </form>
  );
};

export default UpdateAccountForm;
