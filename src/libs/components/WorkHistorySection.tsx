import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {useState} from 'react';
import MaxWidthSection from "./MaxWidthSection.tsx";

interface GalleryImage {
    src: string;
    alt: string;
    text?: string;
    blurb?: string;
}

interface WorkHistorySectionProps {
    title: string;
    leadingText: string;
    text: string;
    items: Array<string>;
    from?: string;
    to?: string;
    className?: string;
    galleryImages?: Array<GalleryImage>;
    embed?: string
}


const WorkHistorySection: React.FC<WorkHistorySectionProps> = ({
                                                                   title,
                                                                   items,
                                                                   from,
                                                                   to,
                                                                   leadingText,
                                                                   text,
                                                                   embed,
                                                                   galleryImages = []
                                                               }) => {

    const [, setOpen] = useState(false);
    const [, setCurrentIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    const responsive = {

        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1

        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
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
                <div className="d-flex border-b-sm pb-4 mb-8 align-end">
                    <h3>{title}</h3>
                    <span className=" mb-2 font-italic ms-auto">{from} - {to}</span>
                </div>
                <p className="mb-8">{leadingText}</p>
                <p className="mb-8 fw-400 font-italic">{text}</p>
                <div className="d-flex">
                    <div className='flex-grow-1'>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}

                        </ul>
                    </div>

                    <div style={{display: 'block', width: '640px'}}>
                        {embed ? (<iframe width="560" height="315"
                                          src={embed}
                                          title="YouTube video player"
                                          frameBorder="0"
                                          allowFullScreen></iframe>)
                            : (<Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}>
                                {galleryImages.map((image, index) => (
                                    <div key={index} style={{padding: '10px'}}
                                         onClick={() => handleImageClick(index)}>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            style={{width: '100%', display: 'block'}}
                                        />
                                        <p style={{fontSize: '0.9em', color: '#555'}}>{image.text}</p>
                                    </div>
                                ))}
                            </Carousel>)
                        }
                    </div>
                </div>
            </div>

        </MaxWidthSection>
    )

}

export default WorkHistorySection