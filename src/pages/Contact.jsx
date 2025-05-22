import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground mt-20 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Contactez-nous</h1>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Formulaire de contact */}
            <form className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="jean.dupont@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  placeholder="Écrivez votre message ici..."
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Envoyer le message
                </button>
              </div>
            </form>

            {/* Infos de contact */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Adresse</h2>
                <p className="text-gray-600">123 Rue de la Réussite, Douala, Cameroun</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Téléphone</h2>
                <p className="text-gray-600">+237 6 99 00 00 00</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-600">contact@votreentreprise.com</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Réseaux sociaux</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-500 hover:underline">Facebook</a>
                  <a href="#" className="text-blue-400 hover:underline">Twitter</a>
                  <a href="#" className="text-pink-600 hover:underline">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
