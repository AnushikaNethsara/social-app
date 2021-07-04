import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext";
import Axios from "axios";
import ErrorNotice from "../components/misc/ErrorNotice";
import constants from "../constants/constants";
import { Link } from "react-router-dom";

export default function EmailValidation() {
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState(false);

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const email1 = { email };
            ////console.log("clicked")
            const loginRes = await Axios.post(
                constants.backend_url + "/users/forgot-password",
                email1
            );
            setSuccess(true);
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return (
        <div>
            {success ? (
                <div className="container text-center mt-5">
                    <h2>Check Your Email!</h2>
                </div>
            ) : (
                <>
                    <div className="page">
                        <div className="back">
                            <div>
                                <div
                                    className="container-lg  shadow p-3 mb-5  text-dark"
                                    style={{ marginTop: "5%", height: "700px" }}
                                >
                                    <div className="container-lg text-dark">
                                        <div className="row row-cols-2" style={{ height: "90vh" }}>
                                            <div className="col">
                                                <div
                                                    className="container-sm   p-3 mb-5 rounded text-dark "
                                                    style={{
                                                        marginTop: "25%",
                                                        backgroundColor: "rgba(255, 255, 255, 0.70)",
                                                    }}
                                                >
                                                    <div>
                                                        <div className="mx-auto">
                                                            <h2>Forget Password</h2>
                                                        </div>
                                                        {error && (
                                                            <ErrorNotice
                                                                message={error}
                                                                clearError={() => setError(undefined)}
                                                            />
                                                        )}
                                                        <div>
                                                            <form onSubmit={submit}>
                                                                <div className="mb-3">
                                                                    <label
                                                                        htmlFor="exampleInputEmail1"
                                                                        className="form-label"
                                                                    >
                                                                        Email
                                                                    </label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        id="login-email"
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                    />
                                                                </div>

                                                                <button
                                                                        onClick={submit}
                                                                    className="btn btn-dark ml-150 px-5 w-100"
                                                                    value="Log in"
                                                                >
                                                                    Confirm
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <form className="form" onSubmit={submit}>
                            <label htmlFor="login-email">Email</label>
                            <input
                                id="login-email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input type="submit" value="Reset Password" />
                        </form> */}
                    </div>
                </>
            )}
        </div>
    );
}
