import { motion } from 'motion/react';
import { Award, Clock, Star } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/chef-photo.jpg" 
                alt="Chef at work" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Chef Étoilé</h4>
                    <p className="text-sm text-gray-500">Expérience de 15 ans</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl text-brand-brown mb-6">Notre Histoire</h2>
            <div className="flex items-center text-brand-orange mb-6 font-semibold">
              <Clock size={20} className="mr-2" />
              <span>Depuis 2018</span>
            </div>
            
            <div className="space-y-4 text-gray-600 mb-8 leading-relaxed">
              <p>
                Né de la passion de fusionner deux mondes culinaires incroyablement riches, "Le Délice Béninois" a ouvert ses portes dans le quartier vibrant de Cadjehoun. 
              </p>
              <p>
                Notre philosophie est simple: utiliser les techniques raffinées de la gastronomie française pour élever les ingrédients frais et les recettes traditionnelles africaines. Chaque plat raconte une histoire de voyage, de culture et d'héritage.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="font-display font-semibold text-xl text-brand-brown mb-4">Prix et Certifications</h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Award className="text-brand-orange" />
                  <span className="font-medium">Excellence Bénin 2022</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Award className="text-brand-orange" />
                  <span className="font-medium">Guide Gastronomique</span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
