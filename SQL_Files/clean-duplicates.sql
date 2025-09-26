-- First, let's see what duplicates we have
SELECT name, COUNT(*) as count
FROM products
GROUP BY name
HAVING COUNT(*) > 1;

-- Delete duplicate products (keeping the first one created)
-- This will keep the product with the earliest created_at for each name
DELETE FROM products 
WHERE id NOT IN (
    SELECT DISTINCT ON (name) id
    FROM products 
    ORDER BY name, created_at ASC
);

-- Verify we now have only 6 unique products
SELECT name, COUNT(*) as count
FROM products
GROUP BY name
ORDER BY name;
