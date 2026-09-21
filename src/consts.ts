// Metadatos globales del sitio.
// Los datos personales (bio, proyectos, experiencia) viven en `src/site.config.ts`.
import { profile } from "./site.config";

export const SITE_TITLE = profile.name;
export const SITE_DESCRIPTION = `${profile.role}. ${profile.tagline}`;
