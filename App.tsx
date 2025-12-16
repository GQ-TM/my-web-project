import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import InfoTable from './components/InfoTable';
import ExternalResources from './components/ExternalResources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Introduction />
        <InfoTable />
        <ExternalResources />
      </main>

      <Footer />
    </div>
  );
}

export default App;