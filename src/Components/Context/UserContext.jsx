import { createContext, useContext, useState, useEffect } from "react";

//  Context
const UserContext = createContext();

// Provider to wrap the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // first get the user from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("Current_User");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function for login
  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("Current_User", JSON.stringify(userData));
  };

  // Function for log out
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("Current_User");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
