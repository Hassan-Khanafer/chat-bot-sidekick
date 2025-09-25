-- Chat Bot Sidekick Database Schema
-- Execute these commands in your Supabase SQL editor

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Products table
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    pages INTEGER NOT NULL,
    cover_type TEXT NOT NULL CHECK (cover_type IN ('Paperback', 'Hard Cover')),
    description TEXT,
    image_url TEXT,
    trilogy_id UUID,
    trilogy_order INTEGER,
    shipment_days INTEGER DEFAULT 3,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table for session tracking
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User activity table
CREATE TABLE user_activity (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    activity_type TEXT NOT NULL DEFAULT 'click',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sales tracking table
CREATE TABLE sales (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    quantity_sold INTEGER NOT NULL DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_products_trilogy_id ON products(trilogy_id);
CREATE INDEX idx_user_activity_user_id ON user_activity(user_id);
CREATE INDEX idx_user_activity_product_id ON user_activity(product_id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_user_activity_user_product ON user_activity(user_id, product_id, activity_type);
CREATE INDEX idx_sales_product_id ON sales(product_id);

-- Insert sample data
INSERT INTO products (id, name, price, pages, cover_type, description, image_url, trilogy_id, trilogy_order, shipment_days) VALUES
('1', 'The Fellowship of the Ring', 15.99, 423, 'Paperback', 'The first volume in J.R.R. Tolkien''s epic masterwork, The Lord of the Rings. Follow Frodo Baggins as he begins his perilous journey to destroy the One Ring.', '/assets/products/fellowship.jpg', 'lotr', 1, 2),
('2', 'The Two Towers', 16.99, 447, 'Paperback', 'The second volume of The Lord of the Rings continues the epic tale as the Fellowship is broken and darkness spreads across Middle-earth.', '/assets/products/two-towers.jpg', 'lotr', 2, 3),
('3', 'The Return of the King', 17.99, 555, 'Hard Cover', 'The final volume of The Lord of the Rings brings the epic tale to its stunning conclusion as the fate of Middle-earth hangs in the balance.', '/assets/products/return-king.jpg', 'lotr', 3, 5),
('4', 'The Hunger Games', 12.99, 374, 'Paperback', 'In the ruins of North America lies Panem, where sixteen-year-old Katniss Everdeen volunteers for the Hunger Games in place of her younger sister.', '/assets/products/hunger-games.jpg', 'hunger-games', 1, 2),
('5', 'Catching Fire', 13.99, 391, 'Paperback', 'Katniss Everdeen has survived the Hunger Games, but the rebellion she has sparked is spreading across Panem in this explosive sequel.', '/assets/products/catching-fire.jpg', 'hunger-games', 2, 3),
('6', 'Mockingjay', 14.99, 390, 'Hard Cover', 'The final book in The Hunger Games trilogy brings Katniss face to face with President Snow in a final battle for Panem''s future.', '/assets/products/mockingjay.jpg', 'hunger-games', 3, 4);

-- Insert sample reviews
INSERT INTO reviews (product_id, rating, review_text) VALUES
('1', 5, 'An absolute masterpiece! Tolkien''s world-building is unparalleled and the journey begins beautifully. A must-read for any fantasy lover.'),
('1', 4, 'Great start to the trilogy, though it can be slow at times. The detailed descriptions really bring Middle-earth to life.'),
('4', 5, 'Couldn''t put it down! The dystopian world is both terrifying and captivating. Katniss is such a strong protagonist.'),
('4', 4, 'Intense and gripping from start to finish. Some violent scenes but they serve the story well. Highly recommend!');

-- Insert sales data (hardcoded numbers)
INSERT INTO sales (product_id, quantity_sold) VALUES
('1', 23),  -- The Fellowship of the Ring
('2', 65),  -- The Two Towers
('3', 24),  -- The Return of the King
('4', 32),  -- The Hunger Games
('5', 12),  -- Catching Fire
('6', 7);   -- Mockingjay

-- Row Level Security (optional, for production use)
-- ALTER TABLE products ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE user_activity ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policies (uncomment if using RLS)
-- CREATE POLICY "Products are publicly readable" ON products FOR SELECT USING (true);
-- CREATE POLICY "Reviews are publicly readable" ON reviews FOR SELECT USING (true);
