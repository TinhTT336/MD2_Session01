import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Func_Comp from "./components/Func_Comp";
import Class_Comp from "./components/Class_Comp";
import Index from "./components/shopping-cart/Index";
// import Header from "./components/manager-product/Header";
// import Navbar from "./components/manager-product/Navbar";
// import Banner from "./components/manager-product/Banner";
// import ListProduct from "./components/manager-product/ListProduct";
// import Footer from "./components/manager-product/Footer";
// import Index from "./components/manager-product";
// import ListUser from "./components/manager-user/ListUser";

function App() {
  // // day la khu vuc de viet code JS
  // const age = 20;
  // const obj = {
  //   id: 1,
  //   name: "Nguyen Van A",
  // };
  return (
    <>
      {" "}
      {/* <header>
  //   //     <h1 style={{ fontSize: 40 }} className='heading'>Day la the Header</h1>
  //   //     <h2>Nam nay toi {age > 18 ? "du 18" : "chua du"} tuoi</h2>
  //   //     <h3>Sinh Vien {obj.name} co ma SV la {obj.id}</h3>
  //   //   </header> */}
      {/* // // <Func_Comp />
      // // <Class_Comp></Class_Comp> */}
      {/* Bai 6 -manager-product  */}
      {/* <Index /> */}
      {/* Bai 5 - manager-user*/}
      {/* <ListUser /> */}
      {/* bai 4 */}
      <Index />
    </>
  );
}

export default App;
