import React from 'react';
import '../styles/CreateChildPage.css';

function CreateChildPage() {
  return (
    <div className="create-child-page">
      <h1>Create Child Profile</h1>
      <form>
        <input type="text" placeholder="Child's Name" />
        <input type="number" placeholder="Child's Age" />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default CreateChildPage;
