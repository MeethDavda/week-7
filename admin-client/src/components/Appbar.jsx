import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userEmailState } from "../store/selectors/userEmail.js";
import { isUserLoading } from "../store/selectors/isUserLoading.js";
import { userState } from "../store/atoms/user.js";

function Appbar() {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <>Loading..</>;
  }

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/addcourse");
                }}
              >
                Add course
              </Button>
            </div>

            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Courses
              </Button>
            </div>

            <Button
              variant={"contained"}
              onClick={() => {
                localStorage.setItem("token", null);
                // window.location = "/";
                setUser({
                  isLoading: false,
                  userEmail: null,
                });
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
          </div>
          <div>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Signin
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Appbar;
