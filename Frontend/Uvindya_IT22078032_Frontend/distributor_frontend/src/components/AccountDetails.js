const AccountDetails = ({ account }) => {
    const strongStyle = { fontWeight: 'bold' };

    return (
        <div className="account-details">
            <p><strong style={strongStyle}>First Name:</strong>{account.fname}</p>
            <p><strong style={strongStyle}>Last Name:</strong>{account.lname}</p>
            <p><strong style={strongStyle}>Employee Id:</strong>{account.id}</p>
            <p><strong style={strongStyle}>NIC:</strong>{account.nic}</p>
            <p><strong style={strongStyle}>Email:</strong>{account.email}</p>
            <p><strong style={strongStyle}>Contact No:</strong>{account.contactNo}</p>
            <p>{account.createdAt}</p>
        </div>
    );
};

export default AccountDetails;
