import { useCMS, useForm, usePlugin } from 'tinacms';
import { useEffect } from 'react';
import { useLocalJsonForm } from 'next-tinacms-json';

export default function Recipes() {
  const cms = useCMS();

  const [data, form] = useLocalJsonForm({
    fileRelativePath: 'content/recipes.json',
    schema: {
      title: 'Recipes',
      fields: [
        {
          name: 'recipes',
          component: 'group-list',
          description: 'List of recipes',
          itemProps: item => ({
            key: item.id,
            label: item.title,
          }),
          fields: [
            { name: 'title', component: 'text' },
            { name: 'description', component: 'textarea' },
            { name: 'ingredients', component: 'list', field: { component: 'text' } },
            { name: 'instructions', component: 'textarea' },
          ],
        },
      ],
    },
  });

  usePlugin(form);

  return (
    <div>
      <h1>{data.title}</h1>
      {data.recipes.map(recipe => (
        <div key={recipe.title}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}
