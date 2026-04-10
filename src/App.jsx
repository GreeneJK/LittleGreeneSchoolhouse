import Nav from './components/Nav';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import ValueProp from './components/ValueProp';
import SignupForm from './components/SignupForm';
import Testimonials from './components/Testimonials';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <ValueProp />
        <SignupForm />
        <Testimonials />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
