import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import {auth , provider  } from "../../firebase/firebase"
import { signInWithPhoneNumber, signInWithPopup ,RecaptchaVerifier } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
// import {  } from "firebase/auth/web-extension";



const validationSchemas = {
  login: Yup.object({
    name: Yup.string()
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
  }),
  phone: Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{10,15}$/, "Invalid phone number")
      .required("Phone is required"),
  }),
};

// useEffect(() => {
//   const storedUser = localStorage.getItem("CurrentUser");
//   if(storedUser) setCurrentUser(JSON.parse(storedUser));
// }, []);

export default function Login() {
const [phone , setPhone]=useState("")
const [step, setStep] = useState("login");
const [currentUser, setCurrentUser] = useState(null);
const [formValues, setFormValues] = useState({
  name: "",
  email: "",
  password: "",
  phone: ""
});

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // const idToken = await user.getIdToken();
    const userData = {
      name: user.displayName || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      photoURL: user.photoURL || "",
      providerId: user.providerData[0]?.providerId || "",
    };
    console.log(user)
    setCurrentUser(userData);
    setFormValues({
    ...formValues,
    ...userData
  })
    setStep("phone");
  } catch (error) {
    console.error("Error during login:", error);
  }
};

const sendOTP = async () => {
  try {
    // For testing only: disable app verification
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha", 
        {
          size: "invisible", // "normal" for visible
          callback: (response) => {
            console.log("Recaptcha verified:", response);
          }
        },
        auth
      );

      // Disable app verification for testing
      window.recaptchaVerifier.appVerificationDisabledForTesting = true;
      await window.recaptchaVerifier.render();
    }

    const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
    console.log("OTP sent:", confirmation);

  } catch (err) {
    console.log("OTP error:", err);
  }
};

  return (
    <>
    {
      step==="login"?
      (
      <Formik
        key="login"
        validateOnMount={false}
        enableReinitialize
        initialValues={{
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        confirmPass: "",

      }}
      validationSchema={validationSchemas[step]}
      onSubmit={(values) => {
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      setCurrentUser(userData);
      setFormValues({
        ...formValues,
        ...userData})
      setStep("phone");
    }}

      >
      {({ isSubmitting }) => (
        <div className="w-full min-h-screen flex justify-center items-center">
        <Form className="min-w-[300px] w-[450px] p-5  bg-black rounded shadow-md m-1">
            <div className="flex justify-between  mb-3">
              <h1 className="text-4xl text-primary -mt-1">K<sub>W</sub></h1>
              <div className="flex flex-col items-center">
                <h2 className="text-white text-xl font-logo">KNOWHERE</h2>
                <span className="text-primary text-[10px]">Co-Working Space</span>
              </div>
            </div>
          <div className="mb-4">
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            <ErrorMessage
              name="name"
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
              className="w-full p-2 border rounded"
              />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
              />
          </div>

          {/* Password */}
          <div className="mb-4">
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded"
              />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
              />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <Field
              type="password"
              name="confirmPass"
              placeholder="Confirm your password"
              className="w-full p-2 border rounded"
              />
            <ErrorMessage
              name="confirmPass"
              component="p"
              className="text-red-500 text-sm"
              />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-secondary hover:bg-hover text-white font-bold py-2 px-4 rounded"
            >
            Login
          </button>
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
      )}
    </Formik>
  )
    :(
      <Formik
          key="phone"
          validateOnMount={false}
          enableReinitialize
        initialValues={{
        phone: formValues.phone || ""
      }}
    validationSchema={Yup.object({
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Invalid phone number")
        .required("Phone is required"),
    })}
    onSubmit={(values) => {
      const finalData = {
        ...currentUser, 
        phone: values.phone,
      };
      setFormValues(finalData)
      localStorage.setItem("CurrentUser", JSON.stringify(finalData));
      console.log("Final Data:", finalData);
    }}
  >
    {() => (
       <div className="w-full min-h-screen flex justify-center items-center">
        <Form className="min-w-[300px] w-[450px] p-5  bg-black rounded shadow-md m-1">
            <div className="flex justify-between  mb-3">
              <h1 className="text-4xl text-primary -mt-1">K<sub>W</sub></h1>
              <div className="flex flex-col items-center">
                <h2 className="text-white text-xl font-logo">KNOWHERE</h2>
                <span className="text-primary text-[10px]">Co-Working Space</span>
              </div>
            </div>
          <div className="mb-4">
            <PhoneInput
              country={"eg"}
              placeholder="Enter Your Number"
              value={phone}
              onChange={(phone)=>setPhone("+" + phone)}
              />
            {/* <ErrorMessage
              name="phone"
              component="p"
              className="text-red-500 text-sm"
              /> */}
          </div>
              <div id="recaptcha"></div>   
            <br />
            <input type="text" className="p-2 rounded" placeholder="Enter OTP"  />
            <br />
            <br />
            <div className="flex justify-between">
            <button
              type="submit"
              className="bg-secondary hover:bg-hover text-white font-bold py-2 px-4 rounded"
              onClick={sendOTP}
              >
              send Otp
            </button>    
            <button
              type="button"
              onClick={() =>{
                setStep("login");
                setFormValues({ ...formValues, phone: "" });
              } 
              } 
              className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
              >
              Go Back
            </button>          
          </div>
          </Form>
      </div>

    )}
  </Formik>
)}
  </>
  );
}




      // <Form className="flex flex-col gap-3">
      //   <div className="bg-gray-800 p-2 rounded text-white text-sm">
      //     <p><strong>Name:</strong> {NormalUser?.name}</p>
      //     <p><strong>Email:</strong> {NormalUser?.email}</p>
      //   </div>

      //   {/* Phone Input */}
      //   <Field name="phone" placeholder="Phone number" />
      //   {errors.phone && touched.phone && <div>{errors.phone}</div>}

      //   {/* Submit */}
      //   <button type="submit">GO</button>
      // </Form>















// import React, { useState } from "react";
// import {auth , provider} from "../../firebase/firebase"
// import { signInWithPopup } from "firebase/auth";
// export default function Login() {
//   const Email_REGEX =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
//   const Pass_REGEX =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
//   const [errors, setErrors] = useState({
//     name:'',
//     email:'',
//     password:'',
//     confirmPass:'',
//   });
//   const [values , setValues]=useState({
//     name:'',
//     email:'',
//     password:'',
//     confirmPass:'',
//   })
//   const [googleUser, setGoogleUser] = useState({
//   name: "",
//   email: "",
//   phoneNumber: "",
//   photoURL: "",
//   providerId: "",
// });
// const handleGoogleLogin = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     const idToken = await user.getIdToken();
//     setGoogleUser({
//       name: user.displayName || "",
//       email: user.email || "",
//       phoneNumber: user.phoneNumber || "",
//       photoURL: user.photoURL || "",
//       providerId: user.providerData[0]?.providerId || "",
//     });
//     localStorage.setItem("CurrentUser" , googleUser)
//     console.log("User:", user);
//     console.log("ID Token:", idToken);
//   } catch (error) {
//     console.error("Error during login:", error);
//   }
// };

// const getInputValue=(e)=>{
//   if(e.target.name === "name"){
//     if(e.target.length < 3){
//       setErrors({
//         ...errors,
//         name:"name must be 3 or more Chars"
//       })
//     }else{
//       setErrors({
//         ...errors,
//         name:""
//       })
//     }
//   }
//   if(e.target.name === "email"){
//     if(!Email_REGEX.test(e.target.value)){
//       setErrors({
//         ...errors,
//         email:"Email Must be"
//       })
//     }else{
//       setErrors({
//         ...errors,
//         email:""
//       })
//     }
//   }
//   if(e.target.name == "password"){
//     if(!Pass_REGEX.test(e.target.value)){
//       setErrors({
//         ...errors,
//         password:"Password Must be"
//       })
//     }else{
//       setErrors({
//         ...errors,
//         password:""
//       })
//     }
//   }
//   if(e.target.name == "confirmPassword"){
//     if(e.target.value === )
//     }
  
// }
// // const handleSubmit =()=>{
//   // // return
//   // }
//   return (
//     <>
//       <div className="w-full min-h-screen flex justify-center items-center">
//         <form 
//         // onSubmit={handleSubmit}
//         className="min-w-[300px] w-[450px] p-5  bg-black rounded shadow-md m-1">
//           <div className="flex justify-between">
//             <h1 className="text-4xl text-primary">K<sub>W</sub></h1>
//             <div className="flex flex-col items-center">
//               <h2 className="text-white text-xl font-logo">KNOWHERE</h2>
//               <span className="text-primary text-[10px]">Co-Working Space</span>
//             </div>
//           </div>
//           {/* <p></p> */}
//         <br />
//           <div className="mb-4 flex flex-col items-center">
//             <input
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Enter Your Name"
//               className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             <p className="text-red-600 text-sm mt-1">as</p>
//           </div>

//           <div className="mb-4 flex flex-col items-center">
//             <input
//             id="email"
//             name="email"
//             type="email"
//             placeholder="Enter Your Email"
//             className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <p className="text-red-600">as</p>
//           </div>
//           <div className="mb-4 flex flex-col items-center">
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Enter Your Password"
//               className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             <p className="text-red-600">as</p>
//           </div>
//           <div className="mb-4 flex flex-col items-center">
//             <input
//               id="confirmPassword"
//               name="confirmPassword"
//               type="password"
//               placeholder="Confirm Password"
//               className="w-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             <p className="text-red-600">as</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <button
//               type="submit"
//               className="w-3/4 bg-secondary hover:bg-hover text-white font-bold py-2 px-4 rounded"
//               >
//               Login
//             </button>
//           </div>
//           <div className="flex items-center gap-2 my-2">
//             <div className="flex-1 h-px bg-gray-300"></div>
//             <span className="text-primary">Or</span>
//             <div className="flex-1 h-px bg-gray-300"></div>
//           </div>
//     <button
//       type="button"
//       className="w-full flex items-center justify-center gap-2 border bg-gray-50 border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-300 transition"
//       onClick={handleGoogleLogin}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 48 48"
//           className="w-5 h-5"
//           >
//         <path
//           fill="#EA4335"
//           d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
//           />
//         <path
//           fill="#4285F4"
//           d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
//           />
//         <path
//           fill="#FBBC05"
//           d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
//           />
//         <path
//           fill="#34A853"
//           d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
//           />
//       </svg>
//       <span className="text-sm font-medium text-gray-700">
//         Sign in with Google
//       </span>
//     </button>

//         </form>
//       </div>

//     </>
//   );
// }

// //displayName
// //email
// //phoneNumber
// //photoURL
// //providerData[0].providerId


// // تبعتو للباك إند
// // await fetch("http://localhost:8000/api/auth/login", {
// //   method: "POST",
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   body: JSON.stringify({ idToken }),
// // });
  
  
  
  
  
  
  
  
  
  
  
//   // <div className="relative w-full min-h-screen">
//     //   {/* Background Image with filters */}
//     //   <div
//     //     className="absolute inset-0 bg-cover bg-center filter grayscale blur"
//     //     style={{ backgroundImage: `url(${bgLogin})`,minHeight:"100vh", backgroundPosition: }}
//     //   ></div>
  
//     //   {/* Form - placed over the background */}
//     //   <form
//     //     onSubmit={handlePhoneSubmit}
//     //     className="relative z-10 max-w-md mx-auto mt-24 p-6 bg-white bg-opacity-80 rounded shadow-lg"
//     //   >
//     //     {!user ? (
//     //       <>
//     //         <h3 className="text-2xl mb-4">
//     //           Welcome To <span className="bg-orange-500 px-2 text-white rounded">KW</span>
//     //         </h3>
//     //         <p className="mb-2">Phone Number</p>
//     //         <input
//     //           type="tel"
//     //           placeholder="Phone Number"
//     //           value={phone}
//     //           onChange={(e) => setPhone(e.target.value)}
//     //           required
//     //           className="w-full p-2 mb-4 border border-gray-300 rounded"
//     //         />
//     //         <button
//     //           type="submit"
//     //           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//     //         >
//     //           تسجيل
//     //         </button>
//     //       </>
//     //     ) : (
//     //       <GoogleLogin
//     //         onSuccess={(credentialResponse) => {
//     //           const decoded = jwtDecode(credentialResponse.credential);
//     //           setUser(decoded);
//     //         }}
//     //         onError={() => console.log("Login Failed")}
//     //       />
//     //     )}
//     //   </form>
//     // </div>
  
  
//   // import React, { useState } from "react";
//   // import { useForm } from "react-hook-form";
//   // import { yupResolver } from "@hookform/resolvers/yup";
//   // import * as yup from "yup";
// // import { GoogleLogin } from "@react-oauth/google";
// // import jwtDecode from "jwt-decode";

// // // Define validation schema with Yup
// // const schema = yup.object().shape({
// //   name: yup.string().required("Name is required"),
// //   email: yup.string().email("Invalid email").required("Email is required"),
// //   phone: yup
// //     .string()
// //     .matches(/^[0-9]+$/, "Phone must contain numbers only")
// //     .min(10, "Phone number must be at least 10 digits")
// //     .required("Phone is required"),
// // });

// // export default function SignInForm() {
// //   const [googleUser, setGoogleUser] = useState(null);
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({ resolver: yupResolver(schema) });

// //   // Handle normal form submit to collect phone number etc.
// //   const onSubmit = (data) => {
// //     console.log("User data:", data);
// //     alert(`Welcome, ${data.name}!`);
// //     // Proceed with your login flow, redirect, or saving data
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-6">
// //       {!googleUser ? (
// //         <div className="flex flex-col items-center space-y-6">
// //           <h2 className="text-2xl font-bold">Sign in with Google</h2>
// //           <GoogleLogin
// //             onSuccess={(credentialResponse) => {
// //               const decoded = jwtDecode(credentialResponse.credential);
// //               setGoogleUser({
// //                 name: decoded.name,
// //                 email: decoded.email,
// //               });
// //             }}
// //             onError={() => alert("Google login failed")}
// //           />
// //         </div>
// //       ) : (
// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //           <h2 className="text-xl font-semibold mb-4">
// //             Welcome, {googleUser.name}
// //           </h2>
// //           <div>
// //             <label className="block mb-1">Name</label>
// //             <input
// //               defaultValue={googleUser.name}
// //               {...register("name")}
// //               className={`w-full p-2 border rounded ${
// //                 errors.name ? "border-red-600" : "border-gray-300"
// //               }`}
// //               placeholder="Name"
// //               readOnly
// //             />
// //             {errors.name && (
// //               <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
// //             )}
// //           </div>

// //           <div>
// //             <label className="block mb-1">Email</label>
// //             <input
// //               defaultValue={googleUser.email}
// //               {...register("email")}
// //               className={`w-full p-2 border rounded ${
// //                 errors.email ? "border-red-600" : "border-gray-300"
// //               }`}
// //               placeholder="Email"
// //               readOnly
// //             />
// //             {errors.email && (
// //               <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
// //             )}
// //           </div>

// //           <div>
// //             <label className="block mb-1">Phone Number</label>
// //             <input
// //               {...register("phone")}
// //               className={`w-full p-2 border rounded ${
// //                 errors.phone ? "border-red-600" : "border-gray-300"
// //               }`}
// //               placeholder="Enter your phone number"
// //             />
// //             {errors.phone && (
// //               <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
// //             )}
// //           </div>

// //           <button
// //             type="submit"
// //             className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
// //           >
// //             Complete Sign In
// //           </button>
// //         </form>
// //       )}
// //     </div>
// //   );
// // }

