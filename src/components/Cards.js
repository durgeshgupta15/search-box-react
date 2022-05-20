import React from 'react'

const Cards = (props) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent:'center'}}>
            {
                props.data.length > 0 && props.data.map(item => (
                    <div className="card" key={item.id} style={{ width: '18rem', marginRight: '15px' }}>
                        <img className="card-img-top" src={item.book_image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>{item.book_author}</span>
                                <span>$ {item.price}</span>
                             </div>   
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards