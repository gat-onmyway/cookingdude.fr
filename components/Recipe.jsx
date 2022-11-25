const Recipe = ({recipe}) => {

    return (
   
      <div className='recipe-card'>
        <div className="recipe-name"><a href={`http://cookingdude.fr/${recipe.id}`}><h3>{recipe.attributes.name}</h3></a></div>
        <img src={`http://api.cookingdude.fr${recipe.attributes.image.data.attributes.formats.thumbnail.url}`} alt={recipe.attributes.name} className="recipe-image" />
        <div className='description'>{recipe.attributes.description}</div>
        <br></br>
        <span className='category'>{recipe.attributes.category.data.attributes.category}</span>
      </div>
  
    )
    }
    
    export default Recipe;