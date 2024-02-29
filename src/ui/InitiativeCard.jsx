import React from 'react';

export default function InitiativeCard({ initiative }) {
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

// export default function AnimalCard({ el, deleteHandler }) {
//   return (
//     <div>
//       <div className="pet-list">
//         <h2>{el.name}</h2>
//         <img src={el.image} alt={el.name} />
//         <Button variant="danger" onClick={() => deleteHandler(el.id)}>Delete</Button>
//       </div>
//     </div>
//   );
// }
