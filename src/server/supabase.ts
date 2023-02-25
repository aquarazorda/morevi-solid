import { createClient } from '@supabase/supabase-js';

const { VITE_SB_URL, VITE_SB_PUB_KEY } = import.meta.env;

if (!VITE_SB_URL || !VITE_SB_PUB_KEY) {
	throw new Error('Error loading env variables');
}

const supabase = createClient(VITE_SB_URL, VITE_SB_PUB_KEY);

export default supabase;