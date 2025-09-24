import React, { useState } from "react";
import logo from "../../assets/images/KW_Orange-removebg-preview2.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import img from "../../assets/images/KW/KWCompany.avif";
import Loading from "../Loading/Loading";
import { Eye, EyeOff } from "lucide-react";

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
  const [showpass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [serverError, setServerError] = useState("");
  const { loginUser } = useUser();
  return (
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
          // if (data.is_staff || data.is_superuser) {
          //   window.location.href = "http://127.0.0.1:8000/admin/";
          // } else {
          navigate("/home");
          // }
        } catch (error) {
          setLoading(false);
          if (error.response?.data?.detail) {
            setStatus(error.response.data.detail);
          } else {
            setStatus("Login failed. Try again later.");
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <div>
          {loading && <Loading />}
          {!loading && (
            <div
              className="w-full min-h-screen flex"
              // style={{backgroundImage:`url(${img})`}}
            >
              <div className="hidden md:block w-1/2 min-h-screen">
                <img
                  src={img}
                  alt="KW Company"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col gap-5 justify-center items-center w-full md:w-1/2 bg-gradient-to-r from-grad1 to-grad2">
                <h1 className="text-xl sm:text-3xl text-white">
                  Login With Your Account{" "}
                </h1>
                <Form className="min-w-[300px] w-[80%] max-w-[550px] p-5 bg-light rounded">
                  <div className="flex justify-between items-center mb-3">
                    <img
                      alt=""
                      src={logo}
                      className="lg:h-[80px] lg:w-[100px] h-[50px] w-[70px] "
                    />
                    {/* <div className="flex flex-col items-center">
                  <h2 className="text-white text-xl font-logo">KNOWHERE</h2>
                  <span className="text-primary text-[10px]">Co-Working Space</span>
                </div> */}
                  </div>
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
                      placeholder="Enter your email"
                      className="w-full p-1 sm:p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
                        placeholder="Enter your password"
                        className="w-full p-1 sm:p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-grad1 to-grad2 hover:bg-hover text-white font-bold py-2 px-4 text-sm lg:text-[16px] rounded"
                    >
                      {isSubmitting ? "Logging in..." : "Log in"}
                    </button>
                    <Link to={"/SignUp"}>
                      <span className="text-secondary text-sm lg:text-[16px] font-semibold">
                        Create an Account?
                      </span>
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </div>
      )}
    </Formik>
  );
}
