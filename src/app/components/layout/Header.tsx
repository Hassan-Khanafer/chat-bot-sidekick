import { APP_CONFIG } from '@/app/lib/constants'

export function Header() {
  return (
    <header className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-dark-gray mb-4">
          {APP_CONFIG.name}
        </h1>
        <p className="text-lg text-medium-gray max-w-3xl mx-auto">
          {APP_CONFIG.description}. Browse our collection of books and interact with our AI assistant 
          to get personalized recommendations, reviews, and detailed information about each title.
        </p>
      </div>
    </header>
  )
}
