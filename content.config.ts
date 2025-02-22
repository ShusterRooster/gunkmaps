import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        all: defineCollection({
            source: '/**.md',
            type: 'page',
            // Define custom schema for docs collection
            schema: z.object({
                coords: z.array(z.number()),
                date: z.date()
            })
        }),

        pins: defineCollection({
            source: '**/.info.yml',
            type: 'data',
            // Define custom schema for docs collection
            schema: z.object({
                title: z.string(),
                description: z.string(),
                coords: z.array(z.number()),
                path: z.string()
            })
        })
    }
})
