import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', guests: '2', message: ''
  });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', guests: '2', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-brand-brown mb-4">Contact & Réservation</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="font-display font-semibold text-2xl text-brand-brown mb-6">Réserver une table</h3>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-brand-green rounded-lg border border-green-200">
                  Votre demande de réservation a été envoyée avec succès! Nous vous contacterons pour confirmer.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date & Heure *</label>
                    <input required type="datetime-local" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Personnes *</label>
                    <select required value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none bg-white">
                      {[1,2,3,4,5,6,7,8,"8+"].map(n => <option key={n} value={n}>{n} {n === 1 ? 'personne' : 'personnes'}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optionnel)</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-orange text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 transition-colors cursor-pointer">
                  Confirmer la réservation
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="font-display font-semibold text-2xl text-brand-brown mb-6">Nos Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-gray-600">
                  <MapPin className="text-brand-orange mt-1 shrink-0" />
                  <p>Rue 545, Cadjehoun<br/>Cotonou, Bénin</p>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Phone className="text-brand-orange shrink-0" />
                  <p>+229 66 XX XX XX</p>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Mail className="text-brand-orange shrink-0" />
                  <p>contact@ledelicebeninois.bj</p>
                </div>
                <div className="flex items-start gap-4 text-gray-600">
                  <Clock className="text-brand-orange mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Mardi - Dimanche</p>
                    <p>Déjeuner: 12h00 - 15h00</p>
                    <p>Dîner: 19h00 - 23h30</p>
                    <p className="text-sm text-gray-500 mt-1">Fermé le Lundi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 min-h-[300px] bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-300">
              {/* Google Maps Placeholder using a static map image for demonstration */}
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Cotonou,Benin&zoom=14&size=800x600&maptype=roadmap&key=TODO')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-center bg-white/90 p-4 rounded-xl shadow-lg">
                    <MapPin size={32} className="text-brand-orange mx-auto mb-2" />
                    <span className="font-semibold text-brand-brown">Le Délice Béninois</span>
                    <p className="text-sm text-gray-500">Cadjehoun</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
