#!/bin/bash

# Chat Bot Sidekick - Quick Setup Script

echo "🤖 Setting up Chat Bot Sidekick..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
if command -v pnpm &> /dev/null; then
    pnpm install
elif command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

echo "✅ Dependencies installed!"

# Check if environment variables are set up
if [ ! -f ".env.local" ]; then
    echo "⚠️  Warning: .env.local file not found."
    echo "   Please copy .env.local template and add your API keys:"
    echo "   - NEXT_PUBLIC_SUPABASE_URL"
    echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY" 
    echo "   - OPENAI_API_KEY"
else
    echo "✅ Environment file found!"
fi

echo ""
echo "🚀 Setup complete! Next steps:"
echo ""
echo "1. Configure your .env.local file with API keys"
echo "2. Set up your Supabase database (see SQL_Files/database-schema.sql)"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Visit http://localhost:3000"
echo ""
echo "📚 For more information, check the README.md file"
