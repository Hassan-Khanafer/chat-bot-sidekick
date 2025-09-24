import { ChatMessage } from '@/app/types'
import { cn } from '@/app/lib/utils'

interface ChatMessageProps {
  message: ChatMessage
}

export function ChatMessageComponent({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn(
      "flex mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] px-3 py-2 rounded-lg text-sm",
        isUser 
          ? "bg-primary-secondary text-white" 
          : "bg-light-gray text-dark-gray"
      )}>
        <p className="leading-relaxed">{message.content}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </div>
    </div>
  )
}
