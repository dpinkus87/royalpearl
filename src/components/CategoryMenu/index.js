import React, { useEffect} from 'react'
import { useCatalogContext } from '../../utils/CatalogState';
import { UPDATE_CURRENT_CATEGORY, UPDATE_CATEGORIES } from '../../utils/actions';
// import { query } from 'firebase';
import { Form, Row, Container } from 'react-bootstrap';

const CategoryMenu = () => {

  return (
    <>
    <Container className='text-white justify-content-center align-items-center'>
    
<Form.Check inline type='checkbox' label='TEST 1' fill="gray"/>
<Form.Check inline type='checkbox' label='TEST 2' />
<Form.Check inline type='checkbox' label='TEST 3' />
   
    </Container>
   
    </>
  )
}

export default CategoryMenu
