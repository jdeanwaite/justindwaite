import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';
import './index.scss';
import { Col, Row } from 'reactstrap';
// import profileImage from '../images/profile-image-small.jpeg';

const IndexPage = ({ data }) => (
  <div>
    <div className="container-fluid headliner">
      <h1>Simplicity and Scalability.</h1>
      {/* <a href="#about" id="down-arrow"> */}
      {/* <span>\/</span> */}
      {/* </a> */}
    </div>
    <div className="container-fluid full-page" id="about">
      <Row>
        <Col sm={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} style={{alignItems: 'center'}}>
          <h1>Hi, I'm Justin.</h1>
          <Image resolutions={data.profileImage.sizes} className="profile-image" />
        </Col>
      </Row>
      <Row>
        <Col sm={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
          <p>
            Software development has been my passion since I was very young. I wrote my first line of code at age 12,
            built my first computer by age 13, and had learned my third programming language by age 16.
          </p>
          <p>
            I'm in the business of building businesses. I strive for simplicity and scalability. I am driven by change
            and motivated by innovation.
          </p>
        </Col>
      </Row>
    </div>
    <div className="container-fluid full-page" id="technologies">
      <Row>
        <Col sm={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} style={{alignItems: 'center'}}>
          <h1>Tools & Technologies</h1>
          <p><em>Innovation distinguishes between a leader and a follower. <strong>– Steve Jobs</strong></em></p>
        </Col>
      </Row>
    </div>
  </div>
);

export default IndexPage;

// export const query = graphql`
//     query GatsbyImageSampleQuery {
//         file(relativePath: { eq: "images/profile-image-small.jpeg" }) {
//             childImageSharp {
//                 # Specify the image processing specifications right in the query.
//                 # Makes it trivial to update as your page's design changes.
//                 resolutions(width: 125, height: 125) {
//                     ...GatsbyImageSharpResolutions
//                 }
//             }
//         }
//     }
// `;

export const pageQuery = graphql`
    query ProfileImageQuery {
        profileImage: imageSharp(id: { regex: "/profile-image/" }) {
            sizes(maxWidth: 256 ) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`;
