import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function InitiativeCard({ initiative, votingHandler }) {
  return (

    <div className="row justify-content-around">
      <div className="col-md-5 mb-4">
        <div className="card text-black" style={{ borderRadius: "25px" }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="card">
                <div className="card-header">
                  <h2>{initiative.name}</h2>
                </div>
                <div className="card-body">
                  <h4>{initiative.description}</h4>
                  <a href="#" class="btn btn-primary">Подробнее</a>
                  <a href="#" class="btn btn-primary" onClick={() => votingHandler(initiative)}>Проголосовать</a>
                  <p>Голосов: {initiative.voites}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

