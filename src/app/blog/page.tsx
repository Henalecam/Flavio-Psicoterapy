import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'O Poder da Meditação no Bem-estar Emocional',
    description: 'Descubra como a prática regular de meditação pode transformar sua saúde mental e emocional.',
    date: '15 de Março, 2024',
    category: 'Bem-estar',
    image: '/images/blog/meditation.jpg',
    slug: 'o-poder-da-meditacao',
  },
  {
    id: 2,
    title: 'Entendendo a Ansiedade: Sinais e Estratégias de Enfrentamento',
    description: 'Aprenda a identificar os sinais da ansiedade e descubra técnicas eficazes para gerenciá-la.',
    date: '10 de Março, 2024',
    category: 'Saúde Mental',
    image: '/images/blog/anxiety.jpg',
    slug: 'entendendo-a-ansiedade',
  },
  {
    id: 3,
    title: 'Cura Energética: O Equilíbrio entre Corpo e Mente',
    description: 'Explore como as técnicas de cura energética podem promover equilíbrio e bem-estar integral.',
    date: '5 de Março, 2024',
    category: 'Cura Energética',
    image: '/images/blog/energy-healing.jpg',
    slug: 'cura-energetica',
  },
]

export default function Blog() {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-serif font-bold mb-6">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Artigos e reflexões sobre bem-estar emocional, autoconhecimento e 
              desenvolvimento pessoal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 