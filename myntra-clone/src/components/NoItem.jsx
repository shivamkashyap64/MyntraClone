import React from 'react'
import { Link } from 'react-router-dom';

const NoItem = () => {
  return (
    <div>
      <div class="alert " role="alert">
  <h4 class="alert-heading">Your cart is empty!</h4>
  <p>Looks like you haven’t added anything to your cart yet.</p>
  <Link className="action_container" to="/">
                <span className="action_name btn btn-add-bag "style={{backgroundColor: 'rgb(255, 63, 108)'}}>Continue Shoping</span>
            </Link>
</div>
    </div>
  )
}

export default NoItem
