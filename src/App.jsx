import "./App.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import AuthorPage from "./pages/AuthorPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Category from "./pages/Category";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUs from "./pages/About_us";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        
        <Route path="blogpost" element={<BlogPost />} />
        <Route path="aboutUs" element={<AboutUs />} />

        <Route path="author" element={<AuthorPage />} />
        <Route path="category" element={<Category />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivacyPolicyPage />} />

        
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>

      {/* <ContactPage /> */}
      {/* <PrivacyPolicyPage /> */}

      {/* <Category /> */}
      {/* <AuthorPage /> */}

      {/* <Blog /> */}
      {/* <BlogPost /> */}

      {/* <AboutUs />   */}

      {/* <Home /> */}

      <Footer />
    </main>
  );
}

function ExampleComponent() {
  return (
    <div className="bg-primary text-whitePrimary p-6">
      <h1 className="font-heading text-yellowAccent text-3xl">
        Welcome to My Project
      </h1>
      <p className="font-body text-grayLight mt-2">
        This project follows a unified design system with a predefined color
        palette and typography.
      </p>
    </div>
  );
}

export default App;
