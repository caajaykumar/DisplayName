import React, { useState } from 'react';

const Textfield = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submittedName, setSubmittedName] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setError('Both first and last name are required.');
      setSubmittedName(null);
      return;
    }

    setError('');
    setSubmittedName({ firstName, lastName });
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

        <div style={{ marginTop: '10px' }}>
          <button type="submit" className="button">Submit</button>
        </div>

        {error && (
          <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
        )}

        {submittedName && (
          <div style={{ marginTop: '20px' }}>
            <label>
              Full name: <strong>{submittedName.firstName} {submittedName.lastName}</strong>
            </label>
          </div>
        )}
      </form>
    </div>
  );
};

export default Textfield;
