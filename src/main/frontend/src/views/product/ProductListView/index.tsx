import React, { useState } from 'react'
import {
  Box,
  Container,
  Grid
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import Page from '../../../components/Page'
import Toolbar from './Toolbar'
import ProductCard from './ProductCard'
import data from './data'
import styles from './index.jss'


const ProductList = () => {
  const classes = styles()
  const [products] = useState(data);

  return (
    <Page
      className={classes.root}
      title='Products'
    >
      <Container maxWidth={false}>
        <p style={{ display: 'flex', justifyContent: 'center' }}>Produtos</p>
      </Container>
    </Page>
  );
};

export default ProductList
