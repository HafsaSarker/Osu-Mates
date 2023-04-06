import { createClient } from '@supabase/supabase-js'

const URL = 'https://nkzruzjjwhgklnhquaso.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5renJ1empqd2hna2xuaHF1YXNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2Mjc2MjEsImV4cCI6MTk5NjIwMzYyMX0.Wd4aMezqxsGPii3FXYxFCRShMijKMBiHDw5iYeh7tls';

export const supabase = createClient(URL, API_KEY);