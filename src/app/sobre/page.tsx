import Image from 'next/image'

export default function About() {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-6">
                Sobre Mendonça
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Psicoterapeuta e curador energético com mais de 15 anos de experiência, 
                dedicado a ajudar pessoas em sua jornada de autoconhecimento e cura.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Minha abordagem integra técnicas tradicionais de psicoterapia com 
                práticas de cura energética, oferecendo um caminho holístico para 
                o bem-estar emocional e espiritual.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Mendonça"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Formação e Certificações
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Psicologia</h3>
              <p className="text-gray-600">
                Graduação em Psicologia pela Universidade de São Paulo (USP)
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Terapia Humanista</h3>
              <p className="text-gray-600">
                Especialização em Abordagem Centrada na Pessoa
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Reiki</h3>
              <p className="text-gray-600">
                Mestre em Reiki Tradicional Japonês
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">ThetaHealing</h3>
              <p className="text-gray-600">
                Certificação em ThetaHealing® DNA Básico e Avançado
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Meditação</h3>
              <p className="text-gray-600">
                Instrutor de Meditação Mindfulness
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Constelação Familiar</h3>
              <p className="text-gray-600">
                Formação em Constelação Familiar Sistêmica
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Minha Missão
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Acredito que cada pessoa carrega dentro de si o potencial para 
              transformação e cura. Minha missão é guiar você nessa jornada de 
              autodescoberta, oferecendo um espaço seguro e acolhedor para 
              explorar suas emoções, compreender seus padrões e encontrar seu 
              caminho para uma vida mais plena e significativa.
            </p>
            <p className="text-lg text-gray-600">
              Através da integração de diferentes abordagens terapêuticas, 
              trabalho para ajudar você a desenvolver maior consciência, 
              resiliência e bem-estar em todas as áreas da sua vida.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 