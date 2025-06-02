'use client';
import useEmblaCarousel from 'embla-carousel-react';
// import 'yet-another-react-lightbox/styles.css';
import {useState, useCallback, useEffect} from 'react';

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
                                                                   className,
                                                                   galleryImages = []
                                                               }) => {

    const [, setOpen] = useState(false);
    const [, setCurrentIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    const scrollPrev = useCallback(() => {
        console.log(emblaApi)
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    const handleImageClick = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };
    const [show, setShow] = useState(false); // State to control visibility
    useEffect(() => {
        console.log('React component mounted!');
        setShow(true)
    }, []); // The empty dependency array makes it run only on mount (and cleanup on unmount)

    return (
            <div className={`${className} transition-opacity ${show ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-xl mx-auto">
                <div className="d-flex flex-wrap border-b-sm pb-2 mb-8 align-end justify-space-between">
                    <h3 className="me-8">{title}</h3>
                    <span className=" mb-2 font-italic">{from} - {to}</span>
                </div>
                <p className="mb-8">{leadingText}</p>
                <p className="fw-400 font-italic">{text}</p>
                <div className="d-flex flex-wrap">
                    <div className=' w-100 w-md-50 mb-7'>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}

                        </ul>
                    </div>
                    <div style={{display: 'block'}} className=" w-100 w-md-50">
                        {embed ? (
                                <div className="video-container mt-4">
                                    <iframe src={embed}
                                            width="560" height="315"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allowFullScreen></iframe>
                                </div>)
                            : (
                                <div className="embla">
                                    <div className="flex justify-space-between mx-2">
                                        <button className="embla__prev" onClick={scrollPrev}>
                                            [ {' <= '} ]
                                        </button>
                                        <button className="embla__next ml-auto" onClick={scrollNext}>
                                            [ {' => '} ]
                                        </button>
                                    </div>
                                    <div className="embla__viewport"
                                         ref={emblaRef}
                                    >
                                        <div className="embla__container">
                                            {galleryImages.map((image, index) => (
                                                <div key={index} style={{padding: '10px'}}
                                                     className="embla__slide"
                                                     // onClick={() => handleImageClick(index)}
                                                >
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                        style={{width: '100%', display: 'block'}}
                                                    />
                                                    <p className="text-center text-caption mt-1">{image.text}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
</div>
            </div>
    )

}

export default WorkHistorySection