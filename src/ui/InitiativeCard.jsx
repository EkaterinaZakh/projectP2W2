import React from 'react';

export default function InitiativeCard({ initiative }) {
  return (
    <>
      <h1>{initiative.name}</h1>
      <h2>{initiative.description}</h2>
    </>
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
