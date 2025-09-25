import { APP_CONFIG } from '@/app/lib/constants'

export function Header() {
  return (
    <header className="bg-primary-green py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {APP_CONFIG.name}
        </h1>
        <p className="text-lg text-white max-w-3xl mx-auto mb-8">
          {APP_CONFIG.description}. Browse our collection of books and interact with our AI assistant.
        </p>
        
        {/* Example prompts section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-4">
            Try asking our AI assistant:
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="space-y-3">
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm font-medium mb-1">📊 Sales & Analytics</p>
                <p className="text-white/90 text-sm">&ldquo;How many copies of The Hunger Games have been sold?&rdquo;</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm font-medium mb-1">⭐ Customer Reviews</p>
                <p className="text-white/90 text-sm">&ldquo;What do customers think about The Fellowship of the Ring?&rdquo;</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm font-medium mb-1">📈 Bestsellers</p>
                <p className="text-white/90 text-sm">&ldquo;What&apos;s the most popular book in your catalog?&rdquo;</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm font-medium mb-1">🚚 Delivery Times</p>
                <p className="text-white/90 text-sm">&ldquo;What are the fastest and slowest delivery times?&rdquo;</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm font-medium mb-1">📚 Book Information</p>
                <p className="text-white/90 text-sm">&ldquo;Tell me more about Mockingjay&rdquo;</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm font-medium mb-1">💬 All Reviews</p>
                <p className="text-white/90 text-sm">&ldquo;Show me all customer reviews&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
