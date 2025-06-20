SELECT 'CREATE DATABASE website'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'subeenregmi.com')\gexec
