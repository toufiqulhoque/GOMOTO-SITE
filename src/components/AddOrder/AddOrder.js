import React, { useEffect, useState } from 'react';

const AddOrder = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://bloodcurdling-cat-91200.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOrder(data));

    },
        []);

    const handleAddToCart = index => {
        const data = order[index];

        fetch(`https://bloodcurdling-cat-91200.herokuapp.com/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("add hoise broooo ");
                } else {
                    alert("add korte pari nai");
                }
            });

    }
    return (
        <div>
            <button
                onClick={() => handleAddToCart()}
                className="btn btn-warning m-2"
            >
                buy now
            </button>
        </div>
    );
};

export default AddOrder;