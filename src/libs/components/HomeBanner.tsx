import profileImage from '@/assets/images/mt-profile.png';
import MaxWidthSection from "./MaxWidthSection.tsx";
import styled from 'styled-components'; // Import styled-components

const VariableH1 = styled.h1`
    white-space: nowrap;
    margin-bottom: 0px;
    @media (max-width: 1024px) {
        font-size: 5.9vw;
    }
`;

const Variableh4 = styled.h4`
    white-space: nowrap;
    @media (max-width: 1024px) {
        font-size: 3vw;
    }
`;

const HomeBanner = () => {

    return <>
        <MaxWidthSection className='align-end'
                         noVerticalPadding>
            <div>
                <img src={profileImage}
                     alt="profile picture"
                     className='flex-shrink-1 bg-white'/>
            </div>

            <div className='d-flex flex-column justify-center'>
                <VariableH1>Matthew Thomson</VariableH1>
                <Variableh4 className='text-nowrap'>Senior Front-end developer</Variableh4>

                <p>Im passionate about developing patterns that are maintainable and good practice, while bringing
                    UX/design principles, building upon lessons and emerging patterns.</p>
                <p>I've spent the last 5 years working on SAAS platforms, recently specialising in
                    front end.</p>
            </div>
        </MaxWidthSection>
    </>
}

export default HomeBanner


