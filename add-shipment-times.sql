-- Add shipment_days column to existing products table
-- Run this in Supabase SQL Editor

-- Add the shipment_days column
ALTER TABLE products ADD COLUMN IF NOT EXISTS shipment_days INTEGER DEFAULT 3;

-- Update existing products with specific shipment times
UPDATE products SET shipment_days = 2 WHERE name = 'The Fellowship of the Ring';
UPDATE products SET shipment_days = 3 WHERE name = 'The Two Towers';
UPDATE products SET shipment_days = 5 WHERE name = 'The Return of the King';
UPDATE products SET shipment_days = 2 WHERE name = 'The Hunger Games';
UPDATE products SET shipment_days = 3 WHERE name = 'Catching Fire';
UPDATE products SET shipment_days = 4 WHERE name = 'Mockingjay';
