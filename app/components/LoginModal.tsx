"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthInput from "./AuthInput";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function LoginModal({ signIn }: { signIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        className={`${
          signIn && "bg-blue-400 text-white"
        } border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {signIn ? "Sign In" : "Sign Up"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">{signIn ? "Sign In" : "Create Account"}</p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {signIn
                  ? "Log Into Your Account"
                  : "Create Your OpenTable Account"}
              </h2>
              <AuthInput inputs={inputs} handleChange = {handleChange} signIn={signIn} />
              <button className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400">
                {signIn ? "Sign In" : "Create Account"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
