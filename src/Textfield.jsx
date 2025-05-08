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
            <lable> first name:</lable> 
            <input
             type ="text" 
            placeholder='First Name '
             name ="firstname"
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
             required
             />
          </div>

          <div>
            <lable> Last Name:</lable> 
            <input 
            type ="text" 
            placeholder='Last Name ' 
            name ="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            />
          </div>

          <div>
            
           <button type="submit" className='button '> Submit</button>
           <lable> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</lable>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

{submittedName && (
  <div style={{ marginTop: '20px' }}>
    <label>
      Full name: <strong>{submittedName.firstName} {submittedName.lastName}</strong>!
    </label>
  </div>
)}

       </form>

    </div>
  )
}

export default Textfield