import { createClient } from '@supabase/supabase-js'
const URL = 'https://zqqnjqayjrchwwfqornl.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcW5qcWF5anJjaHd3ZnFvcm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2ODQxMjYsImV4cCI6MjAyODI2MDEyNn0.rzu1fbIut0twQjDV33yaE2cq4ha7-9Y2qr7sZYMrLT8';
export const supabase = createClient(URL, API_KEY);