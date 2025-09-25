import { useState, useCallback } from 'react'
import { Button } from '@/app/components/ui/button'
import { ChatWindow } from './ChatWindow'
import { ChatInput } from './ChatInput'
import { ChatMessage, Product } from '@/app/types'
import { MessageCircle, X } from 'lucide-react'
import { generateId } from '@/app/lib/utils'
import { APP_CONFIG } from '@/app/lib/constants'

interface ChatbotUIProps {
  currentProduct?: Product | null
  userActivity?: string[]
}

export function ChatbotUI({ currentProduct, userActivity = [] }: ChatbotUIProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: generateId(),
      role: 'user',
      content,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          context: {
            currentProduct,
            userActivity,
            conversationHistory: messages
          }
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      const assistantMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
    } catch {
      // Handle error silently in production
      const errorMessage: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble processing your request right now. Please try again.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }, [messages, currentProduct, userActivity])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-12 w-12 rounded-full bg-primary-green hover:bg-primary-green/90 shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-light-gray">
          {/* Header */}
          <div className="bg-primary-green text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <span className="font-semibold">{APP_CONFIG.chatbotName}</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-white hover:bg-white/20"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Window */}
          <ChatWindow messages={messages} isLoading={isLoading} />

          {/* Input */}
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
      )}
    </div>
  )
}
