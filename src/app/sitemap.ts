import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://preventivacentro.es',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://preventivacentro.es/proteccion',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
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
            priority: 0.5,
        },
    ]
}
