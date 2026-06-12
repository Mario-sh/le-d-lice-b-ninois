import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display font-bold text-3xl mb-4">Le Délice Béninois</h2>
            <p className="text-white/70 max-w-sm mb-6">
              Cuisine française authentique avec saveurs africaines. L'expérience culinaire incontournable à Cotonou.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-white/70 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-white transition-colors">Notre Menu</a></li>
              <li><a href="#a-propos" className="text-white/70 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#galerie" className="text-white/70 hover:text-white transition-colors">Galerie</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">Abonnez-vous pour recevoir nos offres spéciales.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 w-full rounded-l-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-orange"
              />
              <button 
                type="submit" 
                className="bg-brand-orange px-4 py-2 rounded-r-lg font-medium hover:bg-orange-500 transition-colors"
              >
                Go
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Le Délice Béninois. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
