import React from 'react'

import Categories from './Categories'

import { Grid } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>

          <Grid.Column width={4}>
            <Categories />

          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" Component={ProductList} />
              <Route exact path="/products" Component={ProductList} />
              <Route path="/products/:name" Component={ProductDetail} />
              <Route path="/cart" Component={CartDetail} />



            </Routes>



          </Grid.Column>
        </Grid.Row>

      </Grid>

    </div>
  )
}
