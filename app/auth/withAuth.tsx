// import { useEffect, useState } from "react";
// import { AuthDialog } from "./login/authpopup";

// const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
//     return (props: P) => {
//       const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//       const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  
//       useEffect(() => {
//         const userToken = localStorage.getItem("userToken");
  
//         if (!userToken) {
//           setShowAuthModal(true);
//         } else {
//           setIsAuthenticated(true);
//         }
//       }, []);
  
//       return (
//         <>
//           <AuthDialog open={showAuthModal} setOpen={setShowAuthModal} />
//           {isAuthenticated && <WrappedComponent {...props} />}
//         </>
//       );
//     };
//   };
  
//   export default withAuth;
  
