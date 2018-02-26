//Model for smurfs data page

import React, { component } from 'react';

import button from '[path ../../..]components/UI/Button/Button';
import Spinner from '[path ../../..]components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '[path ../../..]/axios-orders';
import Input from '[path ../../..]components/UI/Input/Input';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = ( event ) => {
    event.preventDefault();
    this.setState( { loading: true } );
    const order = {
      indredients: this .props.ingredients,
      price: this.props.price,
      customer: {
        name: 'd2rd',
        address: {
          street: '123 Mainstreet',
          zipCode: '41351',
          country: 'Germany'
        },
        email: 'someone@somewhere.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post( '/orders.json', order )
      .then( response => {
          this.setState( { loading: false } );
          this.props.history.push('/');
      } )
      .catch( error => {
        this.setState( { loading: false } );
      } );
  }

  render () {
    let form = (
      // <form>
      //   <input className={classes.Input} type="text" name="name" />
      //   <input className={classes.Input} type="email" name="email" />
      //   <input className={classes.Input} type="text" name="street" />
      //   <input className={classes.Input} type="text" name="postal" />
      // <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button> />
      // </form>
      <form>
      <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
      <Input inputtype="input" type="email" name="email" placeholder="Your email" />
      <Input inputtype="input" type="text" name="street" placeholder="Your Street"/>
      <Input inputtype="input" type="text" name="postal" placeholder="Your Postal Code"/>
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button> />
    </form>
    );
    if ( this.state.loading ) {
        form = <Spinner />;
    }
  }
}