import { createContext, useEffect, useState } from "react";
import { dbObject } from "../helper/api";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(false);

  const getUser = async () => {
    try {
      setloading(true);
      const { data } = await dbObject.get("/user/auth");
      console.log(data);

      if(data?.success) { 
        setUser(data?.user)
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AppContext.Provider value={{ user, setUser, loading, getUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
