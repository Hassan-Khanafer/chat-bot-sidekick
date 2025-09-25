-- Add fake customer reviews with aliases
-- Run this in your Supabase SQL Editor

-- First, let's add a customer_alias column to the reviews table
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS customer_alias TEXT;

-- Insert comprehensive fake reviews with aliases
INSERT INTO reviews (product_id, rating, review_text, customer_alias) VALUES

-- The Fellowship of the Ring reviews
('1', 5, 'An absolute masterpiece! Tolkien''s world-building is unparalleled and the journey begins beautifully. A must-read for any fantasy lover.', 'FantasyFan42'),
('1', 4, 'Great start to the trilogy, though it can be slow at times. The detailed descriptions really bring Middle-earth to life.', 'BookWorm_Emma'),
('1', 5, 'I''ve read this book three times and it gets better each time. The characters are so well-developed and the adventure is epic!', 'MiddleEarthExplorer'),
('1', 3, 'Classic fantasy but quite dense. Takes patience to get through some sections, but worth it for the payoff.', 'CasualReader99'),

-- The Two Towers reviews  
('2', 5, 'Even better than the first book! The split narrative works perfectly and the battle scenes are incredible.', 'TolkienLover2024'),
('2', 4, 'Gollum is such a fascinating character. The psychological depth in this book is amazing.', 'CharacterStudy'),
('2', 5, 'The Ents! Need I say more? This book has some of the most memorable scenes in fantasy literature.', 'TreeHuggerBooks'),
('2', 4, 'Great continuation of the story. The pacing picks up nicely from the first book.', 'EpicReader'),

-- The Return of the King reviews
('3', 5, 'Perfect conclusion to an epic trilogy. The final battle and resolution are absolutely satisfying.', 'TrilogyCompleter'),
('3', 5, 'Tolkien''s masterpiece reaches its peak here. The emotional weight of the ending is incredible.', 'FantasyMaster'),
('3', 4, 'Amazing finale, though some parts feel a bit rushed. Still, a fitting end to the greatest fantasy series.', 'LordOfTheRingsFan'),
('3', 5, 'The Appendices alone make this book worth it. Such incredible detail and world-building!', 'TolkienScholar'),

-- The Hunger Games reviews
('4', 5, 'Couldn''t put it down! The dystopian world is both terrifying and captivating. Katniss is such a strong protagonist.', 'DystopianLover'),
('4', 4, 'Intense and gripping from start to finish. Some violent scenes but they serve the story well. Highly recommend!', 'ThrillerReader'),
('4', 5, 'Suzanne Collins created such a compelling world. The Hunger Games concept is brilliant and terrifying.', 'SciFiEnthusiast'),
('4', 4, 'Great YA novel that adults can enjoy too. The social commentary is spot-on.', 'CrossGenreReader'),
('4', 5, 'Katniss is one of the best female protagonists I''ve ever read. Strong, complex, and relatable.', 'StrongWomenBooks'),

-- Catching Fire reviews
('5', 5, 'Even better than the first book! The plot twists are incredible and the character development is amazing.', 'SequelLover'),
('5', 4, 'The Quarter Quell concept is brilliant. Collins really knows how to raise the stakes.', 'PlotTwistFan'),
('5', 5, 'Peeta and Katniss'' relationship becomes so much more complex here. Love the political intrigue!', 'RomanceReader'),
('5', 4, 'The arena design is so creative. Collins'' imagination really shines in this book.', 'CreativeWorlds'),

-- Mockingjay reviews
('6', 4, 'Dark and intense finale. The war scenes are brutal but necessary for the story.', 'WarStoryReader'),
('6', 5, 'Perfect ending to the trilogy. Katniss'' journey from survivor to leader is beautifully written.', 'CharacterArcFan'),
('6', 4, 'The psychological toll of war is portrayed so realistically. Collins doesn''t sugarcoat anything.', 'RealisticFiction'),
('6', 3, 'Good conclusion but felt rushed in places. Still satisfying overall.', 'CriticalReader');

-- Update existing reviews to have aliases (if any exist without aliases)
UPDATE reviews 
SET customer_alias = CASE 
    WHEN customer_alias IS NULL THEN 'AnonymousReader' || EXTRACT(EPOCH FROM created_at)::INTEGER % 1000
    ELSE customer_alias 
END
WHERE customer_alias IS NULL;
