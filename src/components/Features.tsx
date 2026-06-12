import { motion } from 'motion/react';
import { ChefHat, Leaf, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ChefHat size={40} className="text-brand-orange mb-4" />,
      title: "Cuisine Française",
      description: "Des techniques culinaires classiques pour sublimer chaque ingrédient."
    },
    {
      icon: <Leaf size={40} className="text-brand-green mb-4" />,
      title: "Saveurs Africaines",
      description: "L'authenticité des épices et produits locaux du Bénin."
    },
    {
      icon: <Sparkles size={40} className="text-brand-orange mb-4" />,
      title: "Ambiance Moderne",
      description: "Un cadre élégant et chaleureux au cœur de Cadjehoun."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Bienvenue au <span className="font-semibold text-brand-brown">Délice Béninois</span>, où la cuisine française rencontre les saveurs africaines. Découvrez notre expérience culinaire unique.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="font-display font-semibold text-xl text-brand-brown mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
