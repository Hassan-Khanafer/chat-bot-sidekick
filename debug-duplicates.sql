-- Check for duplicate products in database
-- Run this in Supabase SQL Editor to debug the Mockingjay issue

-- Check for duplicate product names
SELECT name, COUNT(*) as count 
FROM products 
GROUP BY name 
HAVING COUNT(*) > 1;

-- Check all products to see if Mockingjay appears multiple times
SELECT id, name, trilogy_id, trilogy_order 
FROM products 
WHERE name ILIKE '%mockingjay%' 
ORDER BY name;

-- Show all products to verify data
SELECT id, name, trilogy_id, trilogy_order, shipment_days 
FROM products 
ORDER BY trilogy_id, trilogy_order;
