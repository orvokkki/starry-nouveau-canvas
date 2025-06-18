
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Star } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-orange-300 via-periwinkle-300 to-blue-200 relative overflow-hidden">
      {/* Celestial background elements */}
      <div className="absolute inset-0 celestial-bg">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="constellation constellation-1"></div>
        <div className="constellation constellation-2"></div>
      </div>
      
      <Navigation />
      
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-300 mr-2 animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-serif text-slate-800 art-nouveau-heading italiana-regular">
                Impressum
              </h1>
              <Star className="w-6 h-6 text-yellow-300 ml-2 animate-pulse" />
            </div>
          </div>

          {/* Impressum Content */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 p-8 shadow-lg">
            <div className="space-y-6 text-slate-800">
              <div>
                <h2 className="text-xl font-semibold mb-3 italiana-regular">Angaben gemäß § 5 TMG</h2>
                <p><strong>Luna Design Studio</strong></p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin</p>
                <p>Deutschland</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 italiana-regular">Kontakt</h2>
                <p>Telefon: +49 123 456 789</p>
                <p>E-Mail: hello@lunadesign.com</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 italiana-regular">Umsatzsteuer-ID</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE123456789</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 italiana-regular">Verantwortlich für den Inhalt</h2>
                <p>nach § 55 Abs. 2 RStV:</p>
                <p>Luna Schmidt</p>
                <p>Musterstraße 123</p>
                <p>10115 Berlin</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 italiana-regular">Haftungsausschluss</h2>
                <h3 className="text-lg font-medium mb-2">Haftung für Inhalte</h3>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-lg font-medium mb-2">Haftung für Links</h3>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-lg font-medium mb-2">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Impressum;
