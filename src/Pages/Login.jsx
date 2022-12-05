import React from "react";
// import { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate, redirect, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

function Login() {
  const signIn = useSignIn();
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const isAuth = useIsAuthenticated();

  // https://digitaltwin-fyp.herokuapp.com/api/login
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://digitaltwin-fyp.herokuapp.com/api/login", formData)
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              token: res.data.token,
              expiresIn:3600,
              tokenType: "Bearer",
              authState: {username: formData.username},
            })
          ) {
            // Only if you are using refreshToken feature
            // Redirect or do-something
            navigate("/")
          } else {
            //Throw error
          }
        }
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="text-2xl font-bold">Admin Access</div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type={"text"}
                    placeholder="Username"
                    className="input input-bordered"
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={"password"}
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                {/* <div className="text-center text-primary">
                Back to main page
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
