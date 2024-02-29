// import React, { useEffect, useState } from 'react';
// import { Col, Row, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// // import ProfilePicEdit from '../ui/ProfilePicEdit';
// import Loader from '../HOC/Loader';
// import InitiativeCard from '../../ui/InitiativeCard';

// export default function AccountPage({ userInitiatives }) {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const controller = new AbortController();
//     const { signal } = controller;
//     axios('/api/auth', { signal })
//       .then((res) => setUser(res.data))
//       .catch(console.log);

//     return () => controller.abort();
//   }, []);
//   console.log(user);
//   return (
//     <Row className="justify-content-center align-items-center">
//       <Loader loading={!user}>
//         <Col xs={4}>
//           {/* <ProfilePicEdit user={user} /> */}
//         </Col>
//         <Col xs={8}>
//           <Row>
//             <Col xs={12}>
//               <p>
//                 Name:
//                 {user?.username}
//               </p>
//             </Col>
//             <Col xs={12}>
//               <p>
//                 Email:
//                 {user?.email}
//               </p>
//             </Col>
//             </Col>
//             <Col xs={12}>
//               {userInitiatives.map((initiative) => (
//                 <InitiativeCard key={initiative.id} initiative={initiative} />
//               ))}
//             </Col>
//           </Row>
//         </Col>
//       </Loader>
//     </Row>
//   );
// }

import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import InitiativeCard from '../../ui/InitiativeCard';

export default function AccountPage({ user, userInitiatives }) {
  const [allInitiatives, setAllInitiatives] = useState(userInitiatives);
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/api/account/${id}`);
      setAllInitiatives((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs={4}>
        <div>
          <p>
            Name:
            {user?.username}
          </p>
          <p>
            Email:
            {user?.email}
          </p>
        </div>
      </Col>
      <Col xs={8}>
        <Row>
          <Col xs={12}>
            {allInitiatives.map((initiative) => (
              <InitiativeCard
                key={initiative.userId}
                initiative={initiative}
                deleteHandler={deleteHandler}
              />
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Col, Row, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// import Loader from '../HOC/Loader';
// import InitiativeCard from '../../ui/InitiativeCard';

// export default function AccountPage({ user, userInitiatives }) {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const controller = new AbortController();
//     const { signal } = controller;
//     axios('/account', { signal })
//       .then((res) => setUser(res.data))
//       .catch(console.log);

//     return () => controller.abort();
//   }, []);

//   return (
//     <Row className="justify-content-center align-items-center">
//       <Loader loading={!user}>
//         <Col xs={4}>
//           {/* <ProfilePicEdit user={user} /> */}
//         </Col>
//         <Col xs={8}>
//           <Row>
//             <Col xs={12}>
//               <p>
//                 Name:
//                 {' '}
//                 {user?.username}
//               </p>
//             </Col>
//             <Col xs={12}>
//               <p>
//                 Email:
//                 {' '}
//                 {user?.email}
//               </p>
//             </Col>
//             <Col xs={12}>
//               {userInitiatives.map((initiative) => (
//                 <InitiativeCard key={initiative.id} initiative={initiative} />
//               ))}
//             </Col>
//           </Row>
//         </Col>
//       </Loader>
//     </Row>
//   );
// }
