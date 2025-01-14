import { useEffect, useState } from "react";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isServices, setIsServices] = useState(false)

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  
  const toggleReturn = () =>{
    setIsServices(!isServices);
  }

  const toggleCloseAll = () =>{
    setIsServices(!isServices);
    setIsClick(!isClick);
  }

  useEffect(()=>{
  
  },[])

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg">
                  Accueil
                </a>
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg">
                  Services
                </a>
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg">
                  Tarifs
                </a>
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg">
                  Apropos
                </a>
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg">
                  Rendez-vous
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
                hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {isClick && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50  md:hidden">
            <div className="flex justify-between p-4 z-50">
              <a href="/" className="text-white text-lg">
                Logo
              </a>
              <button className="text-white text-3xl" onClick={toggleNavbar}>
                &times;
              </button>
            </div>
            <div className="px-4 pt-2 pb-3 space-y-8 sm:px-3 ">
              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg ">
                Accueil
                
              </a>

              <p className="text-white block hover:bg-white hover:text-black rounded-lg flex items-center justify-between" onClick={toggleReturn}>
                Services
                <ChevronRight />
              </p>

              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg">
                Tarifs
              </a>

              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg">
                Apropos
              </a>

              <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg">
                Rendez-vous
              </a>
            </div>
          </div>
        )}

        {isServices?
          (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50 md:hidden">
            <div className="flex justify-between p-4 z-50">
              <p className="text-white text-lg flex items-center " onClick={toggleReturn}>
                <ChevronLeft />
                Retour
              </p>
              <button className="text-white text-3xl" onClick={toggleCloseAll}>
                &times;
              </button>
            </div>

            <div className="p-2 flex flex-col gap-9">
              {/* Services details */}
              <div className="p-4  flex flex-col gap-4">
                <p className="text-white text-xl">Lavage Extérieur</p>
                <a href="/exterieur" className="block  text-white">Notre Prestation en Détail</a>
                <a href="/exterieur/#exterieur" className="block text-white">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-xl text-white">Lavage Intérieur</p>
                <a href="/interieur" className="block text-white ">Notre Prestation en Détail</a>
                <a href="/interieur/#interieur" className="block text-white">Notre Tarification</a>
              </div>

              <div className="p-4 flex flex-col gap-4">
                <p className="text-xl text-white">Lavage Complet</p>
                <a href="/complet" className="block text-white">Notre Prestation en Détail</a>
                <a href="/complet/#complet" className="block text-white">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-xl text-white">Formule Sièges</p>
                <a href="/sieges" className="block text-white">Notre Prestation en Détail</a>
                <a href="/sieges/#sieges" className="block text-white">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-xl text-white">Formule Intégrale</p>
                <a href="/integrale" className="block text-white">Notre Prestation en Détail</a>
                <a href="/integrale/#integrale" className="block text-white">Notre Tarification</a>
              </div>

              <div className="p-4  flex flex-col gap-4">
                <p className="text-xl text-white">Services à la carte</p>
                <a href="/carte" className="block text-white">Notre Prestation en Détail</a>
                <a href="/carte/#carte" className="block text-white">Notre Tarification</a>
              </div>
            </div>
          </div>)
          :
          null
        }
      </nav>
    </>
  );
};

export default Navbar;
