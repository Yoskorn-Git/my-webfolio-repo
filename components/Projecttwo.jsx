import React from 'react'
import Masonry from 'react-masonry-css'


const Projecttwo = () => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    var items = [
        { id: 1, name: 'My First Item' },
        { id: 2, name: 'Another item' },
        { id: 3, name: 'Third Item' },
        { id: 4, name: 'Here is the Fourth' },
        { id: 5, name: 'High Five' }
    ];

    items = items.map(function (item) {
        return <div key={item.id}>{item.name}</div>
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>
            <Masonry
                breakpointCols={myBreakpointsAndCols}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {items}
            </Masonry>
        </div>
    );
};

export default Projecttwo