import React from 'react';

export default function InitiativePage({ initiative, userName, allInitiativeUser }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
      <h1>{initiative.name}</h1>
      <p>
        <div>
          {initiative.description}
        </div>
      </p>
      <p>
        <div>
          {initiative.voites}
        </div>
      </p>
      <p>
        <div>
          {userName.username}
        </div>
      </p>
      <div>
        {allInitiativeUser?.map((oneInitiative) => (
          <div key={oneInitiative.id}>
            <a href={`/initiatives/${oneInitiative.id}`}><p>{oneInitiative.name}</p></a>
          </div>
        ))}
      </div>
    </div>
  );
}
