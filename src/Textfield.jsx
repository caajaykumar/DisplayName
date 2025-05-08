import React, { useState } from 'react';

const Textfield = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submittedName, setSubmittedName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setSubmittedName({ firstName, lastName });

    
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: '1px' }}>
          <button type="submit" className="button">Submit</button>
        </div>
      </form>

      {submittedName && (
        <div style={{ marginTop: '20px' }}>
          <label>
             Full Name: {submittedName.firstName} {submittedName.lastName}
          </label>
        </div>
      )}
    </div>
  );
};

export default Textfield;
