import { useSelector } from 'react-redux';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Example(args) {
    const {cartItems} = useSelector((state) => state.cart);


  return (
    <div>
      <Navbar {...args}>
          <Nav className="me-auto">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                    <ShoppingBagOutlinedIcon/>
                        <sub>{cartItems.reduce((total,item)=>total+item.quantity,0)}</sub>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>

                <div className='container'>
      {cartItems.length > 0 ? (
        <div className='row'>
          <div className='col-lg-12'>
            <table className="table table-bordered text-center mt-3">
              <thead>
                <tr>

                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>

                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img className='image' src={item.image} alt={item.name} />
                    </td>
                    <td>{item.name}</td>
                   
                    <td>{item.quantity}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      ) : (
        <div className="cart">
          <p className="alert alert-danger">Cart is Empty</p>
        </div>
      )}
    </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Example;