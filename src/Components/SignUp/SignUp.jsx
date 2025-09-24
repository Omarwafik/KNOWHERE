import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
// import { auth, provider } from "../../firebase/firebase";
// import { signInWithPopup } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import logo from "../../assets/images/Logo-removebg2.png"
import logo from "../../assets/images/KW_Orange-removebg-preview2.png";
import { register, getCsrfToken } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import img from "../../assets/images/KW/KWCompany.avif";
import Loading from "../Loading/Loading";
import { Eye, EyeOff } from "lucide-react";

const validationSchemas = {
  Sign: Yup.object({
    full_name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must be 8+ chars, include uppercase, lowercase and number"
      )
      .required("Password is required"),
    confirmPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phone_number: Yup.string()
      .matches(/^[0-9]{12}$/, "Invalid phone number")
      .required("Phone is required"),
  }),
  // phone: Yup.object({
  //   phone: Yup.string()
  //     .matches(/^[0-9]{10,15}$/, "Invalid phone number")
  //     .required("Phone is required"),
  // }),
};

export default function SignUp() {
  const [showpass, setShowPass] = useState(false);
  const [showconfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);
  const { loginUser } = useUser();
  useEffect(() => {
    getCsrfToken();
  }, []);
  const navigate = useNavigate();
  // const [phone , setPhone]=useState("")
  // const [step, setStep] = useState("login");
  // const [currentUser, setCurrentUser] = useState(null);
  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phone: ""
  // });
  // const navigate = navigate()

  const handleGoogleLogin = async () => {
    try {
      // const result = await signInWithPopup(auth, provider);
      // const user = result.user;
      // const idToken = await user.getIdToken();
      // const userData = {
      //   name: user.displayName || "",
      //   email: user.email || "",
      //   phoneNumber: user.phoneNumber || "",
      //   photoURL: user.photoURL || "",
      //   providerId: user.providerData[0]?.providerId || "",
      // };
      // console.log(user)
      // setCurrentUser(userData);
      // setFormValues(userData)
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  // if(loading){
  //   return <Loading/>
  // }

  return (
    <>
      <Formik
        key="Sign"
        validateOnMount={false}
        enableReinitialize
        initialValues={{
          full_name: "",
          email: "",
          phone_number: "",
          password: "",
          confirmPass: "",
        }}
        validationSchema={validationSchemas.Sign}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setLoading(true);
          try {
            // call API
            const response = await register(
              values.full_name,
              values.email,
              values.password,
              values.phone_number
            );
            // لو كله تمام
            const safeUserData = {
              full_name: response.full_name,
              email: response.email,
              phone_number: response.phone_number,
            };
            localStorage.setItem("Current_User", JSON.stringify(safeUserData));
            loginUser(safeUserData);
            navigate("/home");
          } catch (error) {
            setLoading(false);
            console.log(error);
            if (error.response?.data?.detail) {
              setStatus(error.response.data.detail);
            } else {
              setStatus("Signup failed. Try again later.");
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ status, isSubmitting }) => (
          <div>
            {loading && <Loading />}
            {!loading && (
              <div
                className="w-full min-h-screen flex overflow-hidden bg-center bg-cover"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${img})`,
                }}
              >
                {/* <div className="hidden md:block w-1/2 min-h-screen">
                  <img
                    src={img}
                    alt="KW Company"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div> */}
                <div className="flex flex-col gap-5 justify-center items-center w-full md:w-1/2  ">
                  <h1 className="text-xl sm:text-3xl text-white">
                    Create Your Account{" "}
                  </h1>
                  <Form
                    className="min-w-[300px] w-[80%] max-w-[550px] p-3 sm:p-5 bg-transparent rounded shadow-md m-1 "
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <img
                        alt=""
                        src={`${logo}`}
                        className="lg:h-[80px] lg:w-[100px] h-[50px] w-[70px] "
                      />
                      <div className="flex flex-col items-center">
                        {/* <h2 className="text-primary text-xl font-title">KNOWHERE</h2> */}
                        {/* <span className="text-primary text-[10px]">Co-Working Space</span> */}
                      </div>
                    </div>
                    {status && (
                      <p className="text-red-500 text-[15px] mb-2 text-center">
                        {typeof status === "string"
                          ? status
                          : JSON.stringify(status)}
                      </p>
                    )}
                    <div className="mb-4">
                      <Field
                        id="name"
                        name="full_name"
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full p-1 sm:p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <ErrorMessage
                        name="full_name"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full p-1 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    {/* Phone Number */}
                    <div className="mb-4">
                      <Field name="phone_number">
                        {({ field }) => (
                          <PhoneInput
                            country={"eg"} // أو أي default
                            value={field.value}
                            onChange={(value) =>
                              field.onChange({
                                target: { name: field.name, value },
                              })
                            }
                            inputClass="!w-[90%] p-1 sm:p-2 border rounded"
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="phone_number"
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
                          className="w-full p-1 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        {showpass ? (
                          <EyeOff
                            onClick={() => setShowPass(false)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 w-5 h-5 sm:w-6 sm:h-6"
                          />
                        ) : (
                          <Eye
                            onClick={() => setShowPass(true)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 w-5 h-5 sm:w-6 sm:h-6"
                          />
                        )}
                      </div>
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                      <div className="relative">
                        <Field
                          type={!showconfirm ? "password" : "text"}
                          name="confirmPass"
                          placeholder="Confirm your password"
                          className="w-full p-1 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        {showconfirm ? (
                          <EyeOff
                            onClick={() => setShowConfirm(false)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 w-5 h-5 sm:w-6 sm:h-6"
                          />
                        ) : (
                          <Eye
                            onClick={() => setShowConfirm(true)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 w-5 h-5 sm:w-6 sm:h-6"
                          />
                        )}
                      </div>
                      <ErrorMessage
                        name="confirmPass"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        // disabled={isSubmitting}
                        className="bg-gradient-to-r from-grad1 to-grad2 hover:bg-hover text-white font-bold py-2 px-4 text-sm lg:text-[16px] rounded"
                      >
                        {isSubmitting ? "Signing in..." : "Sign in"}
                      </button>
                      <Link to={"/Login"}>
                        <span className="text-secondary text-sm lg:text-[16px] font-semibold">
                          Already Have an Account?
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                      <div className="flex-1 h-px bg-gray-300"></div>
                      <span className="text-primary">Or</span>
                      <div className="flex-1 h-px bg-gray-300"></div>
                    </div>
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 border bg-gray-50 border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-300 transition"
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
                      <span className="text-sm font-medium text-gray-700">
                        Sign in with Google
                      </span>
                    </button>
                  </Form>
                </div>
              </div>
            )}
          </div>
        )}
      </Formik>
    </>
  );
}
