import React from "react";
import Link from "next/link";
import * as yup from "yup";
import Auth from "@layouts/Auth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput, StyledLabel } from "@components/StyledInput/StyledInput";

interface ILogin {
  email: string;
  password: string;
}

const loginSchema = yup.object({
  email: yup.string().email(),
  password: yup.string(),
});

export default function Login() {
  const { control, handleSubmit } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = () =>
    handleSubmit(async (values) => {
      alert({ ...values });
    })();

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, formState: { isValid } }) => (
                        <>
                          <StyledLabel htmlFor="email">Email</StyledLabel>
                          <StyledInput
                            {...field}
                            id="email"
                            type="email"
                            placeholder="Email"
                            isValid={isValid}
                          />
                        </>
                      )}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <>
                          <StyledLabel htmlFor="password">Password</StyledLabel>
                          <StyledInput
                            {...field}
                            id="password"
                            type="password"
                            placeholder="Password"
                          />
                        </>
                      )}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={onSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
