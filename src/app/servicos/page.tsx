import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 'psicoterapia',
    title: 'Psicoterapia',
    description: 'Acompanhamento terapêutico personalizado para seu desenvolvimento pessoal e emocional.',
    details: [
      'Abordagem centrada na pessoa',
      'Terapia cognitivo-comportamental',
      'Desenvolvimento de autoconhecimento',
      'Gestão de emoções e estresse',
      'Melhoria de relacionamentos',
    ],
    duration: '50 minutos',
    format: 'Presencial ou Online',
    image: '/images/psychotherapy.jpg',
  },
  {
    id: 'cura-energetica',
    title: 'Cura Energética',
    description: 'Técnicas de cura energética para equilibrar corpo, mente e espírito.',
    details: [
      'Reiki Tradicional Japonês',
      'ThetaHealing®',
      'Limpeza e alinhamento de chakras',
      'Cura de traumas emocionais',
      'Desbloqueio energético',
    ],
    duration: '60 minutos',
    format: 'Presencial',
    image: '/images/energy-healing.jpg',
  },
  {
    id: 'online',
    title: 'Sessões Online',
    description: 'Atendimento online com a mesma qualidade e dedicação das sessões presenciais.',
    details: [
      'Psicoterapia online',
      'Meditação guiada',
      'Coaching de vida',
      'Desenvolvimento pessoal',
      'Flexibilidade de horários',
    ],
    duration: '50 minutos',
    format: 'Online',
    image: '/images/online-session.jpg',
  },
]

export default function Services() {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-serif font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-lg text-gray-600">
              Oferecemos diferentes abordagens terapêuticas para atender às suas 
              necessidades específicas, sempre com foco no seu bem-estar e 
              desenvolvimento pessoal.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        O que você vai encontrar:
                      </h3>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center text-gray-600">
                            <svg
                              className="h-5 w-5 text-primary-500 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Duração: {service.duration}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-primary-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        Formato: {service.format}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Link href="/contato" className="btn-primary">
                        Agendar Sessão
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 