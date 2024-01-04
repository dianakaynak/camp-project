import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'


export default function CartSummary() {
  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
          <Dropdown.Item>Acer Leptop</Dropdown.Item>
          <Dropdown.Item>Asus Leptop</Dropdown.Item>
          <Dropdown.Item>Dell Leptop</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git

          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
