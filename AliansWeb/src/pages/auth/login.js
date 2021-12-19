import React from "react";
import {Link} from 'react-router-dom';

function Login() {
    return(
        <div >
            <section className="vh-50 pt-5">
                <h1 className="text-center">Welcome again</h1>
                <h5 className="text-center text-success">Login to your account</h5>
                <div className="container-fluid h-custom pt-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                                 className="img-fluid"
                                 alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>


                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">UserName</label>
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                           placeholder="Enter a valid Username"/>
                                </div>


                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                           placeholder="Enter password"/>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value=""
                                               id="form2Example3"/>
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="#" className="text-body">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                            style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                        <Link to="/register" className="link-danger">Register</Link>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login;