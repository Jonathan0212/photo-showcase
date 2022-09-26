import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentphoto] = useState();

    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name:'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name:'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);
    const toggleModal = (image, i) => {
        setCurrentphoto({...image,index: i });
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div>
            {isModalOpen && (
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
                <div className="flex-row">
                    {currentPhotos.map((image, i) => (
                        <img 
                            src={require(`../../assets/assets/small/${category}/${i}.jpg`)}
                            alt={image.name}
                            className='img-thumbnail mx-1'
                            onClick={() => toggleModal(image, i)}
                            key={image.name}
                        />
                    ))}
            </div>
        </div>
    );
};

export default PhotoList;
