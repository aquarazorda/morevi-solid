import { createClient } from '@supabase/supabase-js';

const { SB_URL, SB_PUB_KEY } = process.env;

if (!SB_URL || !SB_PUB_KEY) {
	throw new Error('Error loading env variables');
}

const supabase = createClient(SB_URL, SB_PUB_KEY);

export default supabase;