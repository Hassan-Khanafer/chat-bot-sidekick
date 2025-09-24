import { useEffect, useRef } from 'react'
import { ChatMessage } from '@/app/types'
import { ChatMessageComponent } from './ChatMessage'
import { Loader2 } from 'lucide-react'

interface ChatWindowProps {
  messages: ChatMessage[]
  isLoading: boolean
}

export function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-off-white">
      {messages.length === 0 ? (
        <div className="text-center text-medium-gray py-8">
          <p className="text-sm">
            Hi! I'm your AI Sidekick. I can help you with information about our books, 
            reviews, and recommendations. What would you like to know?
          </p>
        </div>
      ) : (
        messages.map((message) => (
          <ChatMessageComponent key={message.id} message={message} />
        ))
      )}
      
      {isLoading && (
        <div className="flex justify-start mb-4">
          <div className="bg-light-gray text-dark-gray px-3 py-2 rounded-lg flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Thinking...</span>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  )
}
