import { APP_CONFIG } from '@/app/lib/constants'

export function Header() {
  return (
    <header className="bg-primary-green py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {APP_CONFIG.name}
        </h1>
        <p className="text-lg text-white max-w-3xl mx-auto">
          {APP_CONFIG.description}. Browse our collection of books and interact with our AI assistant 
          to get purchase history for each book, summary of shortest/longest delivery times for all books, 
          reviews, and more information about the books.
        </p>
      </div>
    </header>
  )
}
