import React from 'react';

export default function InitiativePage({ initiative, userName, allInitiativeUser }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '20px',
    }}
    >
      <div style={{ flex: '0 0 100%', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#004085', fontSize: '2em' }}>
          {' '}
          Инициатива:
          {initiative.name}
        </h1>

      </div>
      <div style={{
        flex: '0 0 100%', marginBottom: '20px', border: '1px solid #004085', padding: '10px', color: '#004085',
      }}
      >
        <p style={{ fontSize: '1.2em' }}>
          Описание концепции инициативы:
          {initiative.description}
        </p>
      </div>
      <div style={{ flex: '0 0 100%', marginBottom: '20px' }}>
        <p style={{ color: '#004085', fontSize: '1em' }}>
          Количество проголосовавших:
          {initiative.voites}
        </p>
      </div>
      <div style={{ flex: '0 0 100%', marginBottom: '20px' }}>
        <p style={{
          color: '#004085', fontSize: '1.2em', fontStyle: 'italic', fontWeight: 'bold',
        }}
        >
          Автор инициативы:
          {userName.username}
        </p>
      </div>
      <div>
        Все инициативы автора:
        {allInitiativeUser?.map((oneInitiative) => (
          <div key={oneInitiative.id} style={{ marginBottom: '10px' }}>
            <a href={`/initiatives/${oneInitiative.id}`} style={{ textDecoration: 'none', color: '#004085' }}>
              <p style={{ fontSize: '0.9em' }}>{oneInitiative.name}</p>
            </a>
          </div>
        ))}
      </div>

    </div>

  );
}
