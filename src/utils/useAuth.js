export const useAuth = () => {
  
  
    const isLoggedIn = async ()=> {
        const token = localStorage.getItem("token");

     console.log("authtoken", token);
      return token != null;
    };
    const getAuthToken = async () => {
      return localStorage.getItem("token");
    };
  
    return {

      isLoggedIn,
      getAuthToken,
    };
  };
  