-- Tabla para contraseñas de nicks protegidos (ej: Lali)
-- Ejecutar en Supabase SQL Editor del proyecto radio-chat
CREATE TABLE IF NOT EXISTS nick_claves (
  nick TEXT PRIMARY KEY,
  hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE nick_claves ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "lectura publica" ON nick_claves;
DROP POLICY IF EXISTS "escritura publica" ON nick_claves;
CREATE POLICY "lectura publica" ON nick_claves FOR SELECT USING (true);
CREATE POLICY "escritura publica" ON nick_claves FOR INSERT WITH CHECK (true);
CREATE POLICY "actualizacion publica" ON nick_claves FOR UPDATE USING (true);
