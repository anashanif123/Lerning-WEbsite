

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Signup from "./pages/signup";
import Products from "./pages/products";
import LoginForm from "./pages/login";
import ProductDetails from "./pages/productdetail";
import Header from "./components/header";
import Footer from "./components/footer";
import ThemeContextProvider from "./context/themeConex";
import BlogPage from "./pages/blog";
import PricingPage from "./pages/pricing";
import CoursePage from "./pages/course";

import CourseDetail from "./pages/courseDetail";
import CheckThis from "./pages/check";







function RoutingApp() {
  return(
    
<ThemeContextProvider>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/course" element={<CoursePage/>}/>
      <Route path="/check" element={<CheckThis/>}/>
      <Route path="/courseDetail" element={<CourseDetail/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/login" element={<LoginForm/>}/>
     
      <Route path="Product/:id" element={<ProductDetails/>}/>


          </Routes>
          <Footer/>
    </BrowserRouter>
</ThemeContextProvider>
    
  )
}

export default RoutingApp;