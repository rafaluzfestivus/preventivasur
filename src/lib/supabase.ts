import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xexsxiutjqzkqoclvwpu.supabase.co';
const supabaseAnonKey = 'sb_publishable_l_a3yfhm3xpvDWOqaOK0GA_LQpqBttD';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
