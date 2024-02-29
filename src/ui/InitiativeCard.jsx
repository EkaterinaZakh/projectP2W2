// import React from 'react';
// import { Card } from 'react-bootstrap';

// export default function InitiativeCard({ initiative, deleteHandler }) {
//   return (
//     <Card className="mb-3">
//       <Card.Body>
//         <Card.Title>{initiative.name}</Card.Title>
//         <Card.Text>{initiative.description}</Card.Text>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={() => deleteHandler(post.id)}
//         >
//           Delete post
//         </button>
//       </Card.Body>
//     </Card>
//   );
// }

import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function InitiativeCard({ initiative, deleteHandler }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{initiative.name}</Card.Title>
        <Card.Text>{initiative.description}</Card.Text>
        <Button variant="danger" onClick={() => deleteHandler(initiative.id)}>
          Delete Initiative
        </Button>
      </Card.Body>
    </Card>
  );
}
