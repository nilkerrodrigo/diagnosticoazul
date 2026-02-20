import React from 'react';
import { 
  PlayCircle, 
  XCircle, 
  CheckCircle2, 
  BarChart3, 
  Landmark, 
  AlertTriangle, 
  Lightbulb, 
  Map, 
  ShieldCheck, 
  Search, 
  Lock, 
  Users,
  ArrowRight
} from 'lucide-react';

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 bg-blue-50 p-2 rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      {/* DOBRA 1 & 2 - HERO */}
      <section className="pt-20 pb-16 px-4 text-center bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-3xl opacity-60"></div>
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide uppercase mb-8 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Atenção Empresário
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Seu crédito não é negado por acaso. Existe <span className="text-blue-600 relative whitespace-nowrap">
              R$ 200 mil
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span> esperando pela sua empresa, e ninguém te contou como acessar.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Descubra o que os bancos enxergam no seu CNPJ antes de te dar qualquer resposta: seu rating real, o que está travando seu crédito e quais linhas de crédito sua empresa pode acessar agora.
          </p>
          
          {/* Video Placeholder */}
          <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gray-100 rounded-2xl border border-gray-200 shadow-xl flex items-center justify-center mb-10 overflow-hidden group cursor-pointer">
            <img src="https://picsum.photos/seed/business/1280/720?blur=2" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="relative z-10 bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <PlayCircle className="w-12 h-12 text-blue-600" fill="currentColor" />
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] transition-all flex items-center justify-center mx-auto gap-2 w-full sm:w-auto hover:-translate-y-1">
            QUERO MEU DIAGNÓSTICO E REUNIÃO
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Isso já aconteceu com você?</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Foi ao banco com nome limpo e mesmo assim levou \"não\"",
              "O gerente não soube explicar o motivo da negativa",
              "Tentou em 2, 3 bancos diferentes — sempre o mesmo resultado",
              "Tem faturamento, tem CNPJ ativo, mas limite nunca vem",
              "Está pagando juros de 4%, 5% ao mês sem saber que existem linhas a 0,8%"
            ].map((text, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed relative z-10">
              Se isso acontece com você, o problema não está no seu CPF. Está em informações que aparecem nos sistemas internos dos bancos — e que você nunca teve acesso.
            </p>
          </div>
        </div>
      </section>

      {/* DOBRA 3 - O PRODUTO */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                Não é um PDF que você vai tentar entender sozinho.
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Você recebe o relatório completo com os dados reais do seu CNPJ e CPF — e senta em uma reunião com um gerente de crédito do time do Allan Vinícius, que abre esse relatório com você e explica ponto a ponto o que está acontecendo.
              </p>
              
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-8 h-px bg-blue-600"></span>
                  O que a reunião cobre:
                </h3>
                
                <div className="space-y-6">
                  <FeatureItem 
                    icon={<BarChart3 className="w-6 h-6 text-blue-600" />} 
                    title="Seu Rating Empresarial" 
                    desc="a nota real que o banco usa para definir seu limite antes de qualquer conversa" 
                  />
                  <FeatureItem 
                    icon={<Landmark className="w-6 h-6 text-blue-600" />} 
                    title="Carteira no Banco Central (SCR)" 
                    desc="todos os créditos registrados da sua empresa no sistema financeiro nacional" 
                  />
                  <FeatureItem 
                    icon={<AlertTriangle className="w-6 h-6 text-blue-600" />} 
                    title="Quadro de Ocorrências" 
                    desc="o que vai além do Serasa e que o banco vê na hora" 
                  />
                  <FeatureItem 
                    icon={<Lightbulb className="w-6 h-6 text-blue-600" />} 
                    title="Limite sugerido pelo sistema" 
                    desc="o teto atual do seu perfil e o que fazer para aumentar" 
                  />
                  <FeatureItem 
                    icon={<Map className="w-6 h-6 text-blue-600" />} 
                    title="Plano de ação" 
                    desc="qual linha de crédito faz sentido, qual banco tem mais chance e o que ajustar" 
                  />
                </div>
              </div>

              <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-relaxed">
                  <strong className="block mb-1">Isso não é promessa de aprovação.</strong> 
                  É a informação real que separa quem consegue crédito de quem continua ouvindo "não".
                </p>
              </div>
            </div>
            
            <div className="relative lg:ml-10">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] transform rotate-3 opacity-5"></div>
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] transform -rotate-2 opacity-5"></div>
              <img 
                src="https://picsum.photos/seed/report2/800/1000" 
                alt="Relatório de Crédito" 
                className="relative rounded-[2rem] shadow-2xl border border-gray-100 object-cover w-full h-[600px]" 
                referrerPolicy="no-referrer" 
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold text-gray-900">Análise Completa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 4 - OFERTA + GARANTIA */}
      <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Diagnóstico Completo + Reunião com Gerente de Crédito</h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">Esse tipo de análise em qualquer consultoria custa entre R$ 500 e R$ 1.000 — sem a reunião inclusa.</p>
          
          <div className="bg-white text-gray-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-w-2xl mx-auto relative transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg">
              Oferta Especial
            </div>
            
            <div className="mb-10 mt-4">
              <p className="text-gray-400 font-medium line-through text-lg mb-2">De R$ 197,00</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-medium text-gray-500">Por</span>
                <span className="text-6xl font-extrabold text-gray-900 tracking-tighter">R$ 97</span>
              </div>
              <p className="text-gray-500 mt-3 font-medium">ou 12x de R$ 9,74 no cartão</p>
            </div>
            
            <div className="space-y-4 text-left mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-lg mb-6 text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                O que está incluso:
              </h4>
              {[
                "Relatório completo com dados reais do seu CNPJ e CPF",
                "Reunião individual com gerente de crédito da equipe Azul 360",
                "Análise do seu rating, SCR, ocorrências e limite sugerido",
                "Indicação das linhas de crédito mais adequadas ao seu perfil",
                "Plano de ação personalizado para sua situação"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-2xl text-xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_20px_25px_-5px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3 mb-6 group">
              <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
              GARANTIR MINHA VAGA AGORA
            </button>
            
            <p className="text-sm text-gray-500 text-center font-medium px-4">
              As reuniões são feitas individualmente pelo time da Azul 360. <br className="hidden md:block"/>Quando a agenda fechar, o preço volta ao normal.
            </p>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300 max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50">
            <ShieldCheck className="w-16 h-16 text-blue-400 shrink-0" />
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-white text-xl mb-2">Garantia incondicional de 7 dias</h4>
              <p className="text-slate-300 leading-relaxed">Se não ficar satisfeito com o diagnóstico e a reunião, devolvemos 100% sem perguntas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 5 - AUTORIDADE + RODAPÉ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold text-xs tracking-widest uppercase rounded-full mb-6">
                Especialista
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Quem é Allan Vinícius?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Allan Vinícius é correspondente bancário há mais de 4 anos, CEO da Azul 360 e ex-empresário do varejo que descobriu de dentro como os bancos realmente tomam decisões de crédito.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Hoje seu time usa esse conhecimento para mostrar aos empresários o que o sistema bancário enxerga sobre eles — e como virar esse jogo.
              </p>
              
              <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">+3 mil</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Empresas<br/>atendidas</div>
                </div>
                <div className="text-center border-l border-gray-100">
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">R$ 52M</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Crédito<br/>liberado</div>
                </div>
                <div className="text-center border-l border-gray-100">
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">98%</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">De<br/>aprovação</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://picsum.photos/seed/ceo/600/600" 
                alt="Allan Vinícius" 
                className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl border-8 border-white" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-blue-600 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <button className="bg-white text-blue-900 hover:bg-gray-50 font-bold py-5 px-10 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center mx-auto gap-3 mb-8 w-full sm:w-auto hover:-translate-y-1">
            GARANTIR MEU DIAGNÓSTICO — R$ 97
            <ArrowRight className="w-6 h-6" />
          </button>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-blue-100 text-sm font-medium">
            <span className="flex items-center gap-2"><Lock className="w-5 h-5 opacity-70" /> Pagamento seguro</span>
            <span className="flex items-center gap-2"><Users className="w-5 h-5 opacity-70" /> Reunião individual</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 opacity-70" /> Garantia de 7 dias</span>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-slate-900 py-8 text-center text-slate-500 text-sm px-4">
        <p>© {new Date().getFullYear()} Azul 360. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
