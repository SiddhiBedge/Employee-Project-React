import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Department from "./Components/Department";
import departmentData from "./Data/departmentData";

type StateType = {
  status: "loading" | "error" | "success";
  error?: string;
};

export default function App() {
  const [state] = React.useState<StateType>({
    status: "success",
  });

  const departmentElements = departmentData.map((department) => (
    <Department
      key={department.id}
      departmentName={department.departmentName}
      employees={department.employees}
    />
  ));

  return (
    <>
      <Header />

      <main>
        <h1>Explore Departments</h1>

        {state.status === "loading" && (
          <p>Loading departments...</p>
        )}

        {state.status === "error" && (
          <p>{state.error ?? "Something went wrong."}</p>
        )}

        {state.status === "success" && (
          <>{departmentElements}</>
        )}
      </main>

      <Footer />
    </>
  );
}


// import React from "react";
// import "./App.css";
// import Header from "./Header";
// import Footer from "./Footer";
// import Department from "./Components/Department";
// import departmentData from "./Data/departmentData";

// Challenge faced 
// type StateType = {
//   status: "loading" | "error" | "success";
//   error?: string;
// };


// export default function App() {

// error : unused state so i remove setState => used when we want to extract from API UseEffect
//   const [state, setState] = React.useState<StateType>({
//   status: "loading",
// });


//   const departmentElements = departmentData.map((department) => (
//     <Department
//       key={department.id}
//       departmentName={department.departmentName}
//       employees={department.employees}
//     />
//   ));

//   return (
//     <>
//       <Header />

// //       <main>
// //         <h1>Explore Departments</h1>
// //         
//             {state.status === "loading" && (
//           <p>Loading departments...</p>
//         )}

//         {state.status === "error" && (
//           <p>{state.error ?? "Something went wrong."}</p>
//         )}

//         {state.status === "success" && (
//           <>{departmentElements}</>
//         )}
//       </main>
//       <Footer />
//     </>
//   );
// }

