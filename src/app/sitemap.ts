import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://preventivacentro.es',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://preventivacentro.es/proteccion',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://preventivacentro.es/servicios/gatos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
            priority: 0.85,
        },
        {
            url: 'https://preventivacentro.es/servicios/ninos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
            priority: 0.85,
        },
        {
            url: 'https://preventivacentro.es/servicios/aves',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://preventivacentro.es/testes-certificaciones',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://preventivacentro.es/politica-privacidad',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
