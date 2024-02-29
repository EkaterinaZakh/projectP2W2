import React, { useState } from 'react';
import axios from 'axios';
import InitiativeCard from '../../ui/InitiativeCard';

export default function HomePage({ allInitiatives }) {
  // const [initiatives, setInitiatives] = useState(allInitiatives);

  return (
    <div>
      <section className="svh-100 align-items-center" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 ">
          <h1 style={{ textAlign: "center" }}>Список Инициатив</h1>
          <div>
            {allInitiatives.map((initiative) => (
              <InitiativeCard key={initiative.id} initiative={initiative} />
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}

// import React, { useState } from 'react';
// import axios from 'axios';
// import AnimalCard from '../ui/AnimalCard';

// export default function CurrentFarmPage({ pets }) {
//   const [pet, setPets] = useState(pets);
//   const deleteHandler = async (animalId) => {
//     try {
//       const response = await axios.delete(`/api/animals/${animalId}`);
//       if (response.status === 200) {
//         setPets((prev) => prev.filter((animal) => animal.id !== animalId));
//       } else {
//         console.log('Failed to delete animal');
//       }
//     } catch (error) {
//       console.error('Error deleting animal:', error);
//     }
//   };
//   return (
//     <div>
//       <h1>Список питомцев на ферме:</h1>
//       {' '}
//       <div>
//         {' '}
//         {pet.map((el) => (
//           <AnimalCard key={el.id} el={el} deleteHandler={deleteHandler} />
//         ))}
//       </div>
//     </div>
//   );
// }
