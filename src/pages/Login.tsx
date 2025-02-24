import React, { ChangeEvent, useState } from "react";
import Container from "../components/container";
import Button from "../components/buttuns";
import { useAppContext } from "../components/AppContext";

function Login() {
  const { handleLogin } = useAppContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const TargetValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <Container>
      <div className="w-fit p-5 mx-auto flex flex-col items-center justify-center gap-5 border-2 border-slate-800 shadow-xl rounded-xl my-9">
        <h2 className="text-center font-semibold text-xl text-slate-300">Login for accses!</h2>
        <div className="flex flex-col items-start justify-center gap-2">
          <label className=" font-semibold text-slate-300" htmlFor="name"> Name : </label>
          <input
            onChange={TargetValue}
            id="name"
            type="text"
            className="bg-slate-800 p-2"
            placeholder="name..."
            name="username"
            value={user.username}
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label className=" font-semibold text-slate-300"  htmlFor="Password"> Password : </label>
          <input
            onChange={TargetValue}
            id="Password"
            type="text"
            className="bg-slate-800 p-2"
            placeholder="Password..."
            name="password"
            value={user.password}
          />
        </div>
        <Button
          onClick={() => handleLogin(user.username, user.password)}
          variant="login"
          className="block w-full !p-2 mt-4 mb-2"
        >
          Login
        </Button>
      </div>
    </Container>
  );
}

export default Login;
