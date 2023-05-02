import {graphql} from 'gatsby';
import Employee from '../../components/EmployeePage';

/** TODO: make this work dynamically */
export const query = graphql`
    query {
        EmployeeImages: allFile(
            sort: { order: ASC, fields: [absolutePath] }
            filter: { relativePath: { regex: "/mugshots/larsfredrik.jpg/" } }
        ) {
            edges {
                node {
                    relativePath
                    name
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

export default Employee;
