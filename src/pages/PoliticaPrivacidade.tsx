import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
          <p>
            A sua privacidade é importante para nós. É política da <strong>Azul 360°</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site e outros sites que possuímos e operamos.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Informações que coletamos</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Uso de informações</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Seus direitos</h2>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do e-mail: <strong>contato@azulse.com.br</strong>.
          </p>
          
          <p className="mt-12 text-sm text-gray-500">
            Esta política é efetiva a partir de {new Date().toLocaleDateString('pt-BR')}.
          </p>
        </div>
      </div>
    </div>
  );
}
