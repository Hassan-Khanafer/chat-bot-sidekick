-- Database Setup Script for Chat Bot Sidekick
-- Run this SQL in your Supabase SQL editor to set up the required tables

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    pages INTEGER NOT NULL,
    cover_type TEXT NOT NULL CHECK (cover_type IN ('Paperback', 'Hard Cover')),
    description TEXT,
    image_url TEXT,
    trilogy_id UUID,
    trilogy_order INTEGER
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_activity table
CREATE TABLE IF NOT EXISTS user_activity (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    product_id UUID NOT NULL REFERENCES products(id),
    activity_type TEXT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id UUID NOT NULL REFERENCES products(id),
    user_id UUID REFERENCES users(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_activity_user_id ON user_activity(user_id);
CREATE INDEX IF NOT EXISTS idx_user_activity_product_id ON user_activity(product_id);
CREATE INDEX IF NOT EXISTS idx_reviews_product_id ON reviews(product_id);
CREATE INDEX IF NOT EXISTS idx_products_trilogy_id ON products(trilogy_id);

-- Insert sample data
INSERT INTO products (name, price, pages, cover_type, description, trilogy_id, trilogy_order) VALUES
-- Lord of the Rings trilogy
('The Fellowship of the Ring', 15.99, 423, 'Paperback', 'The first volume in J.R.R. Tolkien''s epic masterwork, The Lord of the Rings. Follow Frodo Baggins as he begins his perilous journey to destroy the One Ring.', '550e8400-e29b-41d4-a716-446655440000', 1),
('The Two Towers', 16.99, 447, 'Paperback', 'The second volume of The Lord of the Rings continues the epic tale as the Fellowship is broken and darkness spreads across Middle-earth.', '550e8400-e29b-41d4-a716-446655440000', 2),
('The Return of the King', 17.99, 555, 'Hard Cover', 'The final volume of The Lord of the Rings brings the epic tale to its stunning conclusion as the fate of Middle-earth hangs in the balance.', '550e8400-e29b-41d4-a716-446655440000', 3),

-- Hunger Games trilogy  
('The Hunger Games', 12.99, 374, 'Paperback', 'In the ruins of North America lies Panem, where sixteen-year-old Katniss Everdeen volunteers for the Hunger Games in place of her younger sister.', '550e8400-e29b-41d4-a716-446655440001', 1),
('Catching Fire', 13.99, 391, 'Paperback', 'Katniss Everdeen has survived the Hunger Games, but the rebellion she has sparked is spreading across Panem in this explosive sequel.', '550e8400-e29b-41d4-a716-446655440001', 2),
('Mockingjay', 14.99, 390, 'Hard Cover', 'The final book in The Hunger Games trilogy brings Katniss face to face with President Snow in a final battle for Panem''s future.', '550e8400-e29b-41d4-a716-446655440001', 3);

-- Insert sample reviews
INSERT INTO reviews (product_id, rating, review_text) 
SELECT id, 5, 'An absolute masterpiece! The world-building is incredible and the characters are so well-developed. A must-read for any fantasy lover.' 
FROM products WHERE name = 'The Fellowship of the Ring';

INSERT INTO reviews (product_id, rating, review_text) 
SELECT id, 4, 'Gripping and intense! The dystopian world feels all too real, and Katniss is such a strong protagonist. Couldn''t put it down.' 
FROM products WHERE name = 'The Hunger Games';

INSERT INTO reviews (product_id, rating, review_text) 
SELECT id, 5, 'The perfect continuation of the story. Tolkien''s prose is beautiful and the adventure never stops. Highly recommended!' 
FROM products WHERE name = 'The Two Towers';

INSERT INTO reviews (product_id, rating, review_text) 
SELECT id, 4, 'Even more intense than the first book! The political intrigue and action sequences are expertly crafted.' 
FROM products WHERE name = 'Catching Fire';
