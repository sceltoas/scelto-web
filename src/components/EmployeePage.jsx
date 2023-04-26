import React, {Fragment} from 'react';
import {Fade} from 'react-awesome-reveal';
import Helmet from 'react-helmet';
import {Parallax} from 'react-parallax';
import {ansatteMedAssets} from '../ansatte-med-assets';
import Favicon from '../images/favicon.png';
import DefaultEmployeeImage from '../images/mugshots/no-pic-yet.jpg';
import {createMetadata} from '../utils';
import {LightButtonAnchor} from './Button';
import CenteredText from './CenteredText';
import EmployeeIntroWithImage from './EmployeeIntroWithImage';
import './EmployeePage.less';
import EmployeeTestimonial from './EmployeeTestimonial';
import Footer from './Footer';
import Navigation from './Navigation';
import Section from './Section';

const currentOrigin =
    typeof window !== `undefined`
        ? window.location.origin
        : 'https://scelto.no';

const EmployeePage = props => {
    const name = props.location.pathname
        .replace('/ansatte/', '')
        .replace('/', '');

    const employee = ansatteMedAssets[name];
    if (!employee) {
        return null;
    }

    const image =
        props.data &&
        props.data.EmployeeImages.edges.find(node => node.node.name === name);

    return (
        <Fragment>
            <Helmet
                title={`${employee.name} jobber i Scelto AS`}
                meta={[
                    ...createMetadata({
                        title: `${employee.name} jobber i Scelto AS`,
                        description: employee.ingress,
                        image: `${currentOrigin}${employee.image}`,
                    }),
                    {
                        name: 'og:url',
                        content: `${currentOrigin}/ansatte/${name}`,
                    },
                ]}
                link={[{ rel: 'icon', href: Favicon }]}
            />
            <Navigation />
            <Section dark={true}>
                <Fade>
                    <EmployeeIntroWithImage
                        employee={employee}
                        image={
                            (image && image.node.childImageSharp.fluid.src) ||
                            DefaultEmployeeImage
                        }
                    />
                    <Fragment>
                        {employee.testimonial && (
                            <EmployeeTestimonial
                                testimonial={employee.testimonial.text}
                                person={employee.testimonial.person}
                                position={employee.testimonial.position}
                                customer={employee.testimonial.customer}
                            />
                        )}
                    </Fragment>
                </Fade>
            </Section>

            <Section
                className="employee-summary"
                title={`Kort om ${employee.firstName}`}
                ingress={employee.ingress}
                useStyles={false}
            >
                <React.Fragment>
                    {employee.mainSection &&
                        employee.mainSection.length > 1 &&
                        employee.mainSection.map((section, index) => (
                            <Fade key={index}>
                                <p>{section}</p>
                            </Fade>
                        ))}
                    <div className="sc-button-container">
                        <LightButtonAnchor
                            href={employee.linkToCV}
                        >{`Last ned ${employee.firstName} sin CV`}</LightButtonAnchor>
                    </div>
                </React.Fragment>
            </Section>
            <Parallax bgImage={employee.customImage}>
                <CenteredText
                    fullpage
                    text={`${employee.firstName} er scawesome!`}
                />
            </Parallax>
            <Footer />
        </Fragment>
    );
};

export default EmployeePage;
