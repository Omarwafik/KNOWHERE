import React, { useEffect, useState } from "react";
import logo from "../../assets/images/KW_Orange-removebg-preview2.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import img from "../../assets/images/KW/KW1.avif";
import Loading from "../Loading/Loading";
import { ArrowRightCircleIcon, Eye, EyeOff } from "lucide-react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import { Helmet } from "react-helmet-async";

const validationSchemas = {
  Login: Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must be 8+ chars, include uppercase, lowercase and number"
      )
      .required("Password is required"),
  }),
};
export default function Login() {
  const { user } = useUser();
  const [showpass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [guest, setGuest] = useState(false);
  const navigate = useNavigate();
  // const [serverError , setServerError] = useState("");
  const { loginUser } = useUser();
  useEffect(() => {
    localStorage.setItem("xmode", JSON.stringify(guest));
  }, [guest]);

  return (
    <>
     <Helmet>
  <title>Login – Knowhere Workspace</title>
  <meta
    name="description"
    content="Login to your Knowhere account to manage bookings, view spaces, and access your workspace dashboard."
  />
  <meta
    name="keywords"
    content="Knowhere login, workspace account Egypt, coworking account access"
  />
  <link rel="canonical" href="https://knowhere-eg.com/login" />
</Helmet>

    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchemas.Login}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        setLoading(true);
        try {
          const data = await login(values.email, values.password);
          // خزن في context + localStorage
          loginUser({
            id: data.id,
            full_name: data.full_name,
            email: data.email,
            phone_number: data.phone_number,
            is_staff: data.is_staff,
            is_superuser: data.is_superuser,
          });
          console.log(data);
          navigate("/home");
          setGuest(false);
        } catch (error) {
          setLoading(false);
          if (error.response?.data?.detail) {
            setStatus("Email or Password Incorrect");
          } else {
            setStatus("Login failed. Try again later.");
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <>
          {loading && <Loading />}
          <main className="p-4 h-screen flex w-full gap-5">
            {!loading && (
              <>
                <section className="image hidden md:block w-1/2 ">
                  <img
                    src={img}
                    alt="KW Company"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </section>
                <section className="right w-full md:w-1/2 h-full rounded-xl relative">
                  <div className="flex flex-col justify-center items-center h-full  w-full">
                    <div className="absolute top-0 left-0">
                      <img
                        alt=""
                        src={logo}
                        className="lg:h-[80px] lg:w-[100px] h-[50px] w-[70px] "
                      />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
                      Welcome Back.
                    </h1>
                    <h2 className="text-primary text-4xl uppercase font-medium mb-1">
                      knowhere{" "}
                    </h2>
                    <Form className="min-w-[300px] w-full max-w-[450px] p-5 ">
                      {status && (
                        <p className="text-red-500 text-[15px] mb-2 text-center">
                          {status}
                        </p>
                      )}

                      {/* Email */}
                      <div className="mb-4">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 
                          focus:ring-primary text-sm md:placeholder:text-base"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      {/* Password */}
                      <div className="mb-4">
                        <div className="relative">
                          <Field
                            type={!showpass ? "password" : "text"}
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:ring-2
                             focus:ring-primary text-sm md:placeholder:text-base"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPass(!showpass)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          >
                            {showpass ? (
                              <EyeOff className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                            )}
                          </button>
                          <ErrorMessage
                          name="password"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-5">
                        <Link to={"/home"}>
                          <button
                            className="relative transition-all duration-300 ease-in-out 
                          shadow-[0_10px_20px_rgba(0,0,0,0.2)] py-2 px-2 md:py-2 md:px-5 
                          bg-secondary  flex items-center justify-center 
                          text-white gap-2    
                          overflow-hidden text-xs md:text-[15px] rounded cursor-pointer group"
                            onClick={() => {
                              setGuest(true);
                            }}
                          >
                            Continue As Guest
                            <ArrowRightCircleIcon className="w-4 h-4 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                            {/* لمعة متحركة */}
                            <span
                              className="absolute top-0 left-[-75%] w-[50%] h-full 
                        bg-gradient-to-r from-transparent via-white/50 to-transparent 
                        skew-x-[-20deg] group-hover:left-[125%] transition-all duration-700 ease-in-out"
                            ></span>
                          </button>
                        </Link>

                        <div className="">
                          <Link to={"/SignUp"}>
                            <span className="text-secondary text-xs md:text-[16px] font-semibold">
                              Create an Account?
                            </span>
                          </Link>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-hover w-full text-white font-bold p-4 text-sm  md:text-base rounded"
                      >
                        {isSubmitting ? "Logging in..." : "Log in"}
                      </button>
                      {/* <div className="flex items-center gap-2 my-2">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-primary">Or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                      </div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border bg-gray-50 border-gray-300 rounded-lg p-2 md:p-4 hover:bg-gray-300 transition"
                        onClick={handleGoogleLogin}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          className="w-5 h-5"
                        >
                          <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                          />
                          <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                          />
                          <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                          />
                        </svg>
                        <span className="text-xs md:text-base font-medium text-gray-700">
                          Log in with Google
                        </span>
                      </button> */}
                    </Form>
                  </div>
                </section>
              </>
            )}
          </main>
        </>
      )}
    </Formik>
    </>
  );
}
