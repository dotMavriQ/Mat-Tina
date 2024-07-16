import { defineConfig } from 'tinacms';

export default defineConfig({
  cms: {
    enabled: true,
  },
  collections: [
    {
      name: 'recipes',
      label: 'Recipes',
      path: 'content/recipes',
      format: 'md',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title',
        },
        {
          type: 'string',
          name: 'description',
          label: 'Description',
        },
        {
          type: 'string',
          name: 'ingredients',
          label: 'Ingredients',
          list: true,
        },
        {
          type: 'string',
          name: 'instructions',
          label: 'Instructions',
        },
      ],
    },
  ],
});
