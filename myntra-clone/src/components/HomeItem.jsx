import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const HomeItem = ({item}) => {
  const dispatch = useDispatch();
  const bagItems = useSelector(store =>store.bag);
  const elemetFound = bagItems.indexOf(item.id) >=0;

const handleAddToBAg=()=>{
dispatch(bagActions.addToBag(item.id))  
};
const handleRemove=()=>{
  dispatch(bagActions.removeFromBag(item.id))  
  };
  

  return (
    <div>
       <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elemetFound ? <button type='button' className="btn btn-add-bag btn-danger" onClick={handleRemove}  > <MdDelete />Remove</button> : 
      <button type='button' className="btn btn-add-bag btn-success" onClick={handleAddToBAg
      } ><IoIosAddCircle />Add to Bag</button>
      }
    </div>
    </div>
  )
}

export default HomeItem
