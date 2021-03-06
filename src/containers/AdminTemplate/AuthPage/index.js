import React, { useState } from "react";
import { actAuth } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";

function AuthPage(props) {
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actAuth(state, props.history));
  };

  const noti = () => {
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h3>AuthPage</h3>
          {noti()}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
