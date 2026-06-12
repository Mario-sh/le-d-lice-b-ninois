import { motion } from 'motion/react';
import specials from '../data/specials.json';

export default function Menu() {
  const day = new Date().getDay();
  const special = specials.find(s => s.day === day);

  const categories = [
    {
      name: "Entrées",
      items: [
        {
          name: "Carpaccio de Tommes",
          desc: "Fines tranches de tomme locale, huile d'olive infusée au piment doux, roquette",
          price: "3 500",
          image: "https://images.unsplash.com/photo-1626082895617-2c6b4545d130?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Velouté d'Igname aux Truffes",
          desc: "Soupe onctueuse d'igname, huile de truffe, croûtons à l'ail",
          price: "4 000",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      name: "Plats Principaux",
      items: [
        {
          name: "Coq au Vin revisité",
          desc: "Volaille locale mijotée au vin rouge, échalotes, champignons, purée de patates douces",
          price: "4 500",
          image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Poulet DG",
          desc: "Le classique modernisé: poulet sauté, bananes plantains frites, légumes croquants",
          price: "5 000",
          image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Crevettes Grillées",
          desc: "Gambas flambées au pastis, sauce vierge pimentée, riz safrané",
          price: "6 000",
          image: "https://images.unsplash.com/photo-1559742811-822873691fc8?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Mille-feuille à la mangue",
          desc: "Pâte feuilletée croustillante, crème légère vanille, dés de mangue fraîche",
          price: "3 000",
          image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-brand-brown mb-4">Notre Menu</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {special && (
          <div className="mb-20 bg-brand-brown/5 rounded-3xl p-8 md:p-12 border-2 border-brand-orange/20">
            <h3 className="font-display font-bold text-3xl text-brand-brown text-center mb-10">Plat du jour</h3>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src={special.image} alt={special.name} className="w-full h-80 object-cover" loading="lazy" />
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-display font-semibold text-2xl text-brand-brown">{special.name}</h4>
                  <span className="text-2xl font-bold text-brand-orange">{special.price} FCFA</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{special.desc}</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="font-display font-semibold text-2xl text-brand-brown mb-8 pb-2 border-b border-gray-200">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIdx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    key={itemIdx} 
                    className="flex flex-col sm:flex-row gap-4 group"
                  >
                    <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg text-gray-900 leading-tight">{item.name}</h4>
                        <span className="font-bold text-brand-orange whitespace-nowrap ml-4">{item.price} FCFA</span>
                      </div>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
