# Codex — Mostrate

Leer [DOCS.md](DOCS.md) antes de cambios arquitectónicos, en particular la
sección 14, **Arquitectura y colaboración**. [README.md](README.md) es la entrada
breve al proyecto.

- Usar el código y la documentación versionada como fuentes de verdad, con el
  orden de autoridad definido en DOCS.md. Verificar las afirmaciones contra el repo.
- No introducir capas, dependencias o abstracciones sin una necesidad concreta;
  aplicar los principios comunes de DOCS.md.
- Preservar la interoperabilidad con Claude Code y las skills de `.claude/skills/`;
  coordinar mediante Git sin duplicar convenciones por proveedor.
- Actualizar la sección pertinente de DOCS.md cuando cambie una decisión
  persistente; una conversación no reemplaza su registro.
- Ejecutar las verificaciones disponibles pertinentes antes de terminar y
  comunicar resultados o limitaciones, según DOCS.md.
- Nunca introducir secretos en archivos versionados.
