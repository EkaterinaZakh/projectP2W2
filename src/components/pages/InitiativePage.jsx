import React from 'react';

export default function InitiativePage({ initiative, userName, allInitiativeUser }) {
  return (




    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" style={{ width: "auto" }}>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      <h1>
                        {initiative.name}</h1>
                    </p>
                    <div> <h2>  Описание:
                      {initiative.description}:
                    </h2></div>

                    <div> <h5>     Количество проголосовавших:
                      {initiative.voites}
                    </h5></div>

                    <div> <h3>        Автор:
                      {userName.username}
                    </h3></div>



                    <div> <h3>Все инициативы автора:</h3>
                      <div> {allInitiativeUser?.map((oneInitiative) => (
                        <div key={oneInitiative.id}>
                          <a href={`/initiatives/${oneInitiative.id}`}>
                            <p style={{ fontSize: '1.5em' }}>{oneInitiative.name}</p>
                          </a>
                        </div>
                      ))}
                      </div>


                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          className="img-fluid rounded-2"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </section >

  );
}



{/* // <section className="vh-100" style={{ backgroundColor: "#eee" }}>
    //   <div className="container h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div style={{
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //         gap: '40px',
    //         alignItems: 'flex-start',
    //         justifyContent: 'flex-start',
    //         padding: '20px',
    //       }}
    //       >
    //         <div style={{ flex: '0 0 100%', marginBottom: '20px', textAlign: 'center' }}>
    //           <h1 style={{ color: '#004085', fontSize: '2em' }}>
    //             {' '}
    //             Инициатива:
    //             {initiative.name}
    //           </h1>

    //         </div>
    //         <div style={{
    //           flex: '0 0 100%', marginBottom: '20px', border: '1px solid #004085', padding: '10px', color: '#004085',
    //         }}
    //         >
    //           <h2 style={{ fontSize: '1.2em' }}>
    //             Описание концепции инициативы:
    //             {initiative.description}
    //           </h2>
    //         </div>
    //         <div style={{ flex: '0 0 100%', marginBottom: '20px' }}>
    //           <h3 style={{ color: '#004085', fontSize: '1em' }}>
    //             Количество проголосовавших:
    //             {initiative.voites}
    //           </h3>
    //         </div>
    //         <div style={{ flex: '0 0 100%', marginBottom: '20px' }}>
    //           <p style={{
    //             color: '#004085', fontSize: '1.2em', fontStyle: 'italic', fontWeight: 'bold',
    //           }}
    //           >
    //             Автор инициативы:
    //             {userName.username}
    //           </p>
    //         </div>
    //         <div>
    //           <h4 style={{
    //             color: '#004085', fontSize: '1.2em', fontStyle: 'italic', fontWeight: 'bold',
    //           }}>Все инициативы автора:</h4>

    //           {allInitiativeUser?.map((oneInitiative) => (
    //             <div key={oneInitiative.id} style={{ marginBottom: '10px' }}>
    //               <a href={`/initiatives/${oneInitiative.id}`} style={{ textDecoration: 'none', color: '#004085' }}>
    //                 <p style={{ fontSize: '0.9em' }}>{oneInitiative.name}</p>
    //               </a>
    //             </div>
    //           ))}
    //         </div>

    //       </div>
    //     </div>
    //   </div>

    // </section > */}