import React from 'react'
import BagItem from '../components/BagItem';
import BagSummary from "../components/BagSummary"
import { useSelector } from 'react-redux';
import NoItem from '../components/NoItem';

const Bag = () => {
const bagItems = useSelector((state)=> state.bag);
const items = useSelector((state) =>state.items);
const finalItems = items.filter((item)=>{
  const itemIndex = bagItems.indexOf(item.id);
  return itemIndex >=0;
});

    

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {(finalItems >=0) ? <NoItem/> : (finalItems.map((item) => (<BagItem item={item}/>) ))}
        </div>
        <BagSummary/>

      </div>
    </main>
  );
}

export default Bag;
