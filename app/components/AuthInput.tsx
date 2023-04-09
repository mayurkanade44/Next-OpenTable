import { useState } from "react";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signIn: Boolean;
}

const AuthInput = ({ inputs, handleChange, signIn }: Props) => {
  return (
    <>
      {!signIn && (
        <>
          <div className="my-3 flex justify-between text-sm">
            <input
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="First Name"
              name="firstName"
              value={inputs.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="Last Name"
              name="lastName"
              value={inputs.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="my-3 flex justify-between text-sm">
            <input
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="Phone Number"
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="City"
              name="city"
              value={inputs.city}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
export default AuthInput;
