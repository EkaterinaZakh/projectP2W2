import React, { useState } from 'react';
import axios from 'axios';
import InitiativeCardHomepage from '../../ui/InitiativeCardHomepage';

export default function HomePage({ allInitiatives }) {
  // const [count, setCount] = useState(initiative?.voites);
  const [initiatives, setInitiatives] = useState(allInitiatives);

  const votingHandler = async (initiative) => {
    try {
      const response = await axios.post(`/initiatives/${initiative.id}/votes`);
      if (response.status === 200) {
        setInitiatives((prev) => prev.map((el) => (el.id === initiative.id ? response.data : el)));
      }
    } catch (error) {
      window.location = "/auth/signup"

      console.error('Ошибка при голосовании', error);
    }
  };

  return (
    <div>
      <section className="svh-100 d-flex align-items-center" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100 ">
          <h1 style={{ textAlign: 'center' }}>Список Инициатив</h1>
          <div className="svh-100 d-flex align-items-center">
            <h2>Общество должно быть услышано, наши голоса никогда не замолкнут!</h2>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex text-align-center order-1 order-lg-2" style={{ margin: '0 auto' }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1682096181675-12f8293cd31e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid rounded-2 mb-3"
                alt="Sample image"
              />
            </div>
          </div>
          <div>
            {initiatives.map((initiative) => (
              // eslint-disable-next-line max-len
              <InitiativeCardHomepage key={initiative.id} initiative={initiative} votingHandler={votingHandler} />
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}
