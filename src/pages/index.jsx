import React, { Fragment } from 'react';
import { Fade } from 'react-awesome-reveal';
import Helmet from 'react-helmet';
import { sortedAnsatte } from '../ansatte-med-assets';
import { DarkButton, LightButton } from '../components/Button';
import EmployeeImageLink from '../components/EmployeeImageLink';
import Footer from '../components/Footer';
import FullPageImageWithHeader from '../components/FullPageImageWithHeader';
import IconTitleAndIntroLink from '../components/IconTitleAndIntroLink';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import Favicon from '../images/favicon.png';
import ArkitekturIcon from '../images/icons/Scelto–illustration-arkitektur-dark-bg-frontpage.svg';
import SystemutviklingIcon from '../images/icons/Scelto–illustration-systemutvikling-dark-bg-tjenester.svg';
import Employees from '../images/man-headphones-working.jpeg';

import '../layouts/scelto.less';
import { createMetadata } from '../utils';
import './index.less';

const IndexPage = (props) => {
    return (
        <Fragment>
            <Helmet
                title="Scelto AS"
                meta={createMetadata({
                    title: 'En lagspiller, lett å samarbeid med, og et positivt bidrag til et hvert miljø.',
                    description:
                        'Scelto leverer senior- og ekspertkompetanse innen systemutvikling og teknisk arkitektur på både Java og .Net.',
                    image: Employees,
                })}
                link={[{ rel: 'icon', href: Favicon }]}
            />
            <Navigation />
            <FullPageImageWithHeader
                title={`Tunge på kunnskap. Lette å samarbeide med.`}
                subtitle="Vi har lang erfaring med å bistå alle type bedrifter innen systemutvikling og teknisk arkitektur med å bygge innovative og strategisk gode løsninger."
                link="#whoarewe"
                image={Employees}
            />

            <Section
                id="whoarewe"
                title="Hva kjennetegner en Scelto-konsulent?"
                ingress="Vi er en gruppe positive og kunnskapsrike mennesker som bruker vår ekspertise for at din bedrift skal kunne yte best mulig. Våre konsulenters evne til å samarbeide tett med våre kunder og kolleger gjør at alle våre tjenester og produkter blir skreddersydd etter kundens ønske."
            >
                <Fragment>
                    <h5>
                        Se alle våre konsulenters biografi for mer utdypende
                        informasjon om vår kompetanse!
                    </h5>
                    <div
                        style={{
                            display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {sortedAnsatte.map(({ name, image, title, key }) => {
                            return (
                                <EmployeeImageLink
                                    key={key}
                                    image={image}
                                    name={name}
                                    title={title}
                                    to={`/ansatte/${key}`}
                                />
                            );
                        })}
                    </div>
                    <div className="sc-button-container">
                        <DarkButton to="/ansatte" text="Se alle konsulentene" />
                    </div>
                </Fragment>
            </Section>

            <Section
                dark={true}
                title="Hva gjør vi?"
                ingress="Scelto tilbyr konsulentutleie innen systemutvikling og teknisk arkitektur. Alle konsulentene hos oss er seniorprofiler med bred teknisk og forretningsmessig erfaring."
            >
                <Fragment>
                    <div className="tjenester">
                        <Fade>
                            <IconTitleAndIntroLink
                                icon={SystemutviklingIcon}
                                title="Systemutvikling"
                                intro="Systemutviklerne i Scelto har et høyt kompetansenivå på de fleste områder innen utvikling og metodikk."
                            />
                        </Fade>
                        <Fade>
                            <IconTitleAndIntroLink
                                icon={ArkitekturIcon}
                                title="Teknisk arkitektur"
                                intro="Hyggelige og dyktige tekniske arkitekter med bred kompetanse fra en rekke større og mindre systemer"
                            />
                        </Fade>
                    </div>
                    <div className="sc-button-container">
                        <LightButton
                            to="/tjenester"
                            text="Les mer om våre tjenester"
                        />
                    </div>
                </Fragment>
            </Section>
            <Footer />
        </Fragment>
    );
};

export default IndexPage;
