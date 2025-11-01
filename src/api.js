import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/auth",
  withCredentials: true, // مهم عشان الكوكيز تتبعت
});

// جلب الـ CSRF token
export const getCsrfToken = async () => {
  await API.get("/csrf/");
  // console.log("hi");
};

// تسجيل الدخول
// 3iez ab3at hena is_guest
export const login = async (email, password) => {
  const res = await API.post(
    "/login/",
    { email, password },
    { headers: { "X-CSRFToken": getCookie("csrftoken") } }
  );
  return res.data;
};

// register
export const register = async (full_name, email, password, phone_number) => {
  const res = await API.post(
    "/register/",
    { full_name, email, password, phone_number },
    // console.log("hi1"),
    { headers: { "X-CSRFToken": getCookie("csrftoken") } },
    {credentials: "include"},
    // console.log("hi2")
  );
  return res.data;
};

// logout
export const logout = async () => {
  const res = await API.post(
    "/logout/",
    {},
    { headers: { "X-CSRFToken": getCookie("csrftoken") } }
  );
  return res.data;
};

// helper → يجيب قيمة أي cookie
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
