import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
        
        <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Termos</h2>
          <p>
            Ao acessar ao site da <strong>Azul 360°</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Azul 360°, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>modificar ou copiar os materiais;</li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
          </ul>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Isenção de responsabilidade</h2>
          <p>
            Os materiais no site da Azul 360° são fornecidos 'como estão'. A Azul 360° não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Limitações</h2>
          <p>
            Em nenhum caso a Azul 360° ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Azul 360°, mesmo que a Azul 360° ou um representante autorizado da Azul 360° tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contato</h2>
          <p>
            Para questões relacionadas a estes termos, entre em contato através do e-mail: <strong>contato@azulse.com.br</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
