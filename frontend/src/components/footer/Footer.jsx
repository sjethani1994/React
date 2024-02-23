// import React, { useState } from "react";
// import "./Footer.css";
// import usePost from "../../hooks/usePost";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   // Destructuring values returned by usePost hook
//   const { data, error, subscribe } = usePost();

//   const handleSubmit = async () => {
//     try {
//       // Make a POST request to your backend API endpoint to subscribe the user
//       await subscribe(email);
//       setSubscribed(true);
//     } catch (error) {
//       console.error("Error subscribing:", error);
//       // Handle error (e.g., show error message to user)
//     }
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <footer className="text-center text-white footer">
//         <div className="container p-4 pb-0">
//           <section className="">
//             <form action="">
//               <div className="row d-flex justify-content-center">
//                 <div className="col-auto">
//                   <p className="pt-2">
//                     <strong>Sign up for our newsletter</strong>
//                   </p>
//                 </div>
//                 <div className="col-md-5 col-12">
//                   <div className="form-outline form-white mb-4">
//                     <input
//                       type="email"
//                       id="form5Example2"
//                       className="form-control"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-auto">
//                   <button
//                     type="button"
//                     className="btn btn-outline-light mb-4"
//                     onClick={handleSubmit}
//                   >
//                     Subscribe
//                   </button>
//                 </div>
//               </div>
//             </form>
//             {subscribed && (
//               <div className="row">
//                 <div className="col text-center">
//                   <p className="text-white">Thank you for subscribing!</p>
//                 </div>
//               </div>
//             )}
//           </section>
//         </div>
//         <div
//           className="text-center p-3"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//         >
//           © 2020 Copyright:
//           <a className="text-white" href="https://mdbootstrap.com/">
//             MDBootstrap.com
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import "./Footer.css";
import usePost from "../../hooks/usePost";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Destructuring values returned by usePost hook
  const { data, error, subscribe } = usePost();

  const handleSubmit = async () => {
    try {
      // Make a POST request to your backend API endpoint to subscribe the user
      await subscribe(email);
      setSubscribed(true);
    } catch (error) {
      console.error("Error subscribing:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="container-fluid">
      <footer className="text-center text-white footer">
        <div className="container p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn btn-outline-light mb-4"
                    onClick={handleSubmit}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            {subscribed && (
              <div className="row">
                <div className="col text-center">
                  <p className="text-white">Thank you for subscribing!</p>
                </div>
              </div>
            )}
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgb(7 34 46 / 60%)",
            borderRadius: "25px",
          }}
        >
          © 2024 Copyright :
          <span className="text-white">
            <a
              href="https://github.com/sjethani1994"
              target="_blank"
              className="link-effect"
              rel="noreferrer"
            >
              {" "}
              Sumit
            </a>{" "}
            and{" "}
            <span>
              <a
                href="https://github.com/mohit01110"
                target="_blank"
                className="link-effect"
                rel="noreferrer"
              >
                Mohit
              </a>
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
