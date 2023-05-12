import React, { useEffect} from 'react'
import { useStoreContext } from '../../pages/Catalog/CatalogState';
import { UPDATE_CURRENT_CATEGORY, UPDATE_CATEGORIES } from '../../utils/actions'
import { query } from 'firebase'
import { Form } from 'react-bootstrap/Form'

const CategoryMenu = () => {

    const [state, dispatch] = useStoreContext();

    const { categories } = state;
  
 
  
    useEffect(() => {
    })

const handleClick = (id) => {
    dispatchEvent({
        type:UPDATE_CURRENT_CATEGORY,
        currentCategory: id,
    })
}

  return (
    <div>
      {categories.map((item) =>
      <Form.Check key={item._id}
      onClick={() => {
        handleClick(item._id);
      }}
      >
        {item.name}
      </Form.Check>
      )}
    </div>
  )
}

export default CategoryMenu
