import { createClient } from '@supabase/supabase-js';

// 這些是從 Netlify 抓取的秘密密碼
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
