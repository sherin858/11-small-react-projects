import React from 'react'

function Items({Menu}) {
return (
    <div  className="items-container">
    {Menu.map((item) => {
            const {title,category,price,img,desc,id} = item;
            return (
                <div key={id} className="item"> 
                    <img src={img} alt={title} />
                    <div>
                        <div className='item-header'>
                            <h4>{title}</h4>
                            <h4 className='price'>${price}</h4>
                        </div>
                        <p>{desc}</p>
                    </div>
                </div>
            );
    })}
    </div>
)
}

export default Items
// import React from 'react';

// const items = ({ Menu }) => {
//   return (
//     <div className='section-center'>
//       {Menu.map((menuItem) => {
//         const { id, title, img, desc, price } = menuItem;
//         return (
//           <article key={id} className='menu-item'>
//             <img src={img} alt={title} className='photo' />
//             <div className='item-info'>
//               <header>
//                 <h4>{title}</h4>
//                 <h4 className='price'>${price}</h4>
//               </header>
//               <p className='item-text'>{desc}</p>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default items;
