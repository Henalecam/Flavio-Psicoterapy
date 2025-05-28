import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative container flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Bem-vindo ao seu caminho de cura e transformação
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Psicoterapia e cura energética para seu bem-estar emocional e espiritual
          </p>
          <Link href="/contato" className="btn-primary">
            Agende sua sessão
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Nossos Serviços
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Psicoterapia</h3>
              <p className="text-gray-600 mb-4">
                Acompanhamento terapêutico personalizado para seu desenvolvimento pessoal e emocional.
              </p>
              <Link href="/servicos#psicoterapia" className="text-primary-600 hover:text-primary-700">
                Saiba mais →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Cura Energética</h3>
              <p className="text-gray-600 mb-4">
                Técnicas de cura energética para equilibrar corpo, mente e espírito.
              </p>
              <Link href="/servicos#cura-energetica" className="text-primary-600 hover:text-primary-700">
                Saiba mais →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Sessões Online</h3>
              <p className="text-gray-600 mb-4">
                Atendimento online com a mesma qualidade e dedicação das sessões presenciais.
              </p>
              <Link href="/servicos#online" className="text-primary-600 hover:text-primary-700">
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Depoimentos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "As sessões de psicoterapia transformaram minha vida. Aprendi a lidar melhor com minhas emoções e encontrei um novo sentido para minha jornada."
              </p>
              <p className="font-medium">Maria Silva</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                "A cura energética me ajudou a encontrar equilíbrio e paz interior. Recomendo fortemente para quem busca bem-estar espiritual."
              </p>
              <p className="font-medium">João Santos</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 