import { marked } from 'marked';
import Link from 'next/link';


import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';


const fullRecipe = ({ recipe }) => {
  const getMarkdownText = (text) => {
    const formattedText = marked(text);
    return { __html: formattedText };

  };
 
  return (
  <div>
  <div className="header">
    <div><a href={`http://api.cookingdude.fr/admin/auth/login`}><h3  href="/" className="iconlogin">{<UserOutlined /> }</h3></a></div> 
    <h3><a href={`http://cookingdude.fr`}>Cooking Dude</a></h3>
    <div><a href={`http://cookingdude.fr`}><h3 className="iconlogin">{<MenuOutlined /> }</h3></a></div>
  </div>
    <div className="fullrecipe-card">
      <h1 className="recipe-name">{recipe.attributes.name}
      <p className="recipe-chefname">Proposée par {recipe.attributes.chef}</p>
      </h1>
      <img className="image-card"
        src={`http://api.cookingdude.fr${recipe.attributes.image.data.attributes.formats.medium.url}`}
        alt={recipe.attributes.name}
        width={400}
      />
      <br/>
      <h3 className="recipe-attribute">Les ingrédients</h3>
      <br/>
      <div
        dangerouslySetInnerHTML={getMarkdownText(
          recipe.attributes.ingredients
          )}
      ></div>
      <br/>
      <h3 className="recipe-attribute">Les étapes</h3>
      <br/>
      <div 
        dangerouslySetInnerHTML={getMarkdownText(
          recipe.attributes.instructions
        )}
      ></div>
    </div>
  </div>
  );
};

export default fullRecipe;

export async function getStaticPaths() {
  const response = await fetch('http://api.cookingdude.fr/api/recipes?populate=*');
  const recipes = await response.json();
  return {
    paths: recipes.data.map((recipe) => ({
      params: {
        id: recipe.id.toString(),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://api.cookingdude.fr/api/recipes/${params.id}?populate=*`
  );

  const recipe = await response.json();

  return {
    props: { recipe: recipe.data },
    revalidate: 1,
  };
}