import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Navigation from '../../components/Navigation';
import Section from '../../components/Section';
import Favicon from '../../images/favicon.png';
import Puzzle from '../../images/puzzle.jpeg';
import { getScores, rounds } from '../../scores';
import { createMetadata } from '../../utils';

import './index.less';
import Footer from '../../components/Footer';

const IndexPage = () => (
    <Fragment>
        <Helmet
            title="Scelto AS"
            meta={createMetadata({
                title: 'Scelto tilbyr ekspertkonsulenter innen systemutvikling og teknisk arkitektur',
                image: Puzzle,
            })}
            link={[{ rel: 'icon', href: Favicon }]}
        />
        <Navigation />
        <Section dark title="Scuppen 2023" className="scuppen-scores">
            <table
                cellPadding="0"
                cellSpacing="0"
                className="scuppen-scores__table"
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sceltoer</th>
                        <th className="scuppen-scores-entry__resultList">
                            Resultater
                        </th>
                        <th>Tellende poengsum</th>
                        <th>Total poengsum</th>
                    </tr>
                </thead>
                <tbody id="results-table">
                    {getScores().map((score, index) => (
                        <tr class="scuppen-scores-entry">
                            <td>{index + 1}</td>
                            <td>{score.name}</td>
                            <td className="scuppen-scores-entry__resultList">
                                {score.resultList}
                            </td>
                            <td>{score.countingScore}</td>
                            <td style={{ opacity: '.5' }}>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p style={{ fontSize: '0.6em' }}>D=Deltatt, F=Feilet i å møte</p>
            <p class="small">
                Resultat etter {rounds.length} runder med{' '}
                {rounds.map(({ head }) => head).join(', ')}
            </p>
        </Section>
        <Footer />
    </Fragment>
);

export default IndexPage;
