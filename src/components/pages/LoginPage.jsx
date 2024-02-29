import React from 'react'
import axios from 'axios';


export default function LoginPage() {
    const submitHandler = async (e) => {
        e.preventDefault();
        const fromData = Object.fromEntries(new FormData(e.target));
        const res = await axios.post('/api/auth/login', fromData);
        if (res.status === 200) {
            window.location.href = '/';
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
                                            Вход в личный кабинет
                                        </p>

                                        <form onSubmit={submitHandler} className="mx-1 mx-md-4">
                                            <div className="d-flex flex-column mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="form3Example1c"
                                                        className="form-control"
                                                        name="email"
                                                    />
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example1c"
                                                    >
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="form3Example1c"
                                                        className="form-control"
                                                        name="password"
                                                    />
                                                    <label
                                                        className="form-label"
                                                        htmlFor="form3Example1c"
                                                    >
                                                        Пароль
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-lg"
                                                >
                                                    Войти
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
