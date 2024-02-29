import React, { useState } from 'react'
import axios from 'axios';



export default function SignupPage({ districts, redirect }) {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    districtId: '',
  });

  const changeHandler = (e) => setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }))

  const submitHandler = async (e) => {
    e.preventDefault();
    // const formData = Object.fromEntries(new FormData(e.target));
    const response = await axios.post('/api/auth/signup', formData)
    if (response.status === 200) {
      window.location = redirect ?? "/"
    }
  }
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Регистрация
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={submitHandler}>
                      <div className="d-flex flex-column mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="username"
                            placeholder="Введите Имя"
                            value={formData.name}
                            onChange={changeHandler}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Фамилия Имя Отчество
                          </label>
                        </div>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example1c"
                            className="form-control"
                            name="email"
                            placeholder="Введите почту"
                            value={formData.email}
                            onChange={changeHandler}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Адрес электронной почты
                          </label>
                        </div>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Введите пароль"
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Пароль
                          </label>
                        </div>
                        <div className="form-outline flex-fill mb-0">

                          <select className="form-select" aria-label="Default select example"
                            name="districtId"
                            placeholder="Выберите район"
                            type="select"
                            id="form3Example1c"
                            value={formData.districtId}
                            onChange={changeHandler}>

                            {districts.map((el) => {
                              return <option key={el.id} value={el.id}>{el.name}</option>
                            })}

                          </select>
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Район проживания
                          </label>

                        </div>
                      </div>


                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Зарегистрироваться
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://images.unsplash.com/photo-1550418290-a8d86ad674a6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid rounded-2"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
