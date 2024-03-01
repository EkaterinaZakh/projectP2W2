import React, { useState } from 'react';
import axios from 'axios';
import InitiativeCard from '../../ui/InitiativeCard';

export default function HomePage({ allInitiatives }) {
  // const [count, setCount] = useState(initiative?.voites);
  const [initiatives, setInitiatives] = useState(allInitiatives)

  const votingHandler = async (initiative) => {
    try {
      const response = await axios.post(`/initiatives/${initiative.id}/votes`)
      if (response.status === 200) {
        setInitiatives(prev => prev.map(el => el.id === initiative.id ? response.data : el))
      }
    } catch (error) {
      window.location = "/auth/signup"

      console.error('Ошибка при голосовании', error);
    }

  }

  return (
    <div>
      <section className="svh-100 align-items-center" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 ">
          <h1 style={{ textAlign: "center" }}>Список Инициатив</h1>
          <div>
            {initiatives.map((initiative) => (
              <InitiativeCard key={initiative.id} initiative={initiative} votingHandler={votingHandler} />
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}


