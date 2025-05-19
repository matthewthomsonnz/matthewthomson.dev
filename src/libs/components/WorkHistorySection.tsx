import profileImage from '@/assets/images/mt-profile.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {useState} from 'react';
import MaxWidthSection from "./MaxWidthSection.tsx";

interface WorkHistorySectionProps {
    title: string;
    items: Array<string>;
    className?: string;
}


const WorkHistorySection: React.FC<WorkHistorySectionProps> = ({title, items}) => {
    const galleryImages = [
        {id: 1, src: {profileImage}, alt: 'Image 1 description', blurb: 'This is a short description for image 1.'},
        {id: 2, src: {profileImage}, alt: 'Image 2 description', blurb: 'This is a short description for image 1.'},
        {id: 3, src: {profileImage}, alt: 'Image 3 description', blurb: 'This is a short description for image 1.'},
        {id: 4, src: {profileImage}, alt: 'Image 3 description', blurb: 'This is a short description for image 1.'},
    ];
    const [, setOpen] = useState(false);
    const [, setCurrentIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            partialVisibilityGutter: 50,
            centerMode: true,
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            partialVisibilityGutter: 50,
            centerMode: true,
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            partialVisibilityGutter: 50,
            centerMode: true,
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            partialVisibilityGutter: 50,
            centerMode: true,
            items: 1
        }
    };
    // const responsive = {
    //     desktop: {
    //         breakpoint: {max: 3000, min: 1024},
    //         partialVisibilityGutter: 50,
    //         centerMode: true,
    //         items: 1,
    //     },
    //     tablet: {
    //         breakpoint: {max: 1024, min: 464},
    //         partialVisibilityGutter: 50,
    //         centerMode: true,
    //         items: 1,
    //     },
    //     mobile: {
    //         breakpoint: {max: 464, min: 0},
    //         partialVisibilityGutter: 50,
    //         centerMode: true,
    //         items: 1,
    //     },
    // };
    return (
        <MaxWidthSection>
            <div>

                <h3>{title}</h3>
                <div className="d-flex">
                    <div className='flex-grow-1'>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}

                        </ul>
                    </div>

                    <div style={{display: 'block', width: '640px'}}>
                        <Carousel centerMode={true} responsive={responsive} infinite={true}
                                  containerClass="carousel-container">
                            {galleryImages.map((image, index) => (
                                <div key={image.id} style={{padding: '10px'}}
                                     onClick={() => handleImageClick(index)}>
                                    <img
                                        src={image.src.profileImage}
                                        alt={image.alt}
                                        style={{width: '100%', display: 'block'}}
                                    />
                                    <p style={{fontSize: '0.9em', color: '#555'}}>{image.blurb}</p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

        </MaxWidthSection>
    )

}

export default WorkHistorySection