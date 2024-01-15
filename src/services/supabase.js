/* eslint-disable no-undef */
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://tviilgcxkrzlcljbujqc.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2aWlsZ2N4a3J6bGNsamJ1anFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2OTcwNzYsImV4cCI6MjAyMDI3MzA3Nn0.IZUG7dh9VR76GFd1tdlifyntcZisyK4nc2ZNGayfAJg`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
