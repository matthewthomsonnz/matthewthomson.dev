import profileImage from '@/assets/images/mt-profile.png';
import MaxWidthSection from "./MaxWidthSection.tsx";

const HomeBanner = () => {

    return <>
        <MaxWidthSection className='align-end'
                         noVerticalPadding>
            <div>
                <img src={profileImage}
                     alt="profile picture"
                     className='flex-shrink-1 mh-500px'/>
            </div>

            <div className='d-flex flex-column justify-center'>
                <h1 className='text-nowrap text-secondary'>Matthew Thomson</h1>
                <h4 className='text-nowrap'>Senior Front-end developer</h4>
            </div>
        </MaxWidthSection>
    </>
}

export default HomeBanner