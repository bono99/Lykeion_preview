import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useAuth0 } from "../js/react-auth0-spa";
import EpistemologyImage from '../assets/epistemology.jpg';
const Profile = () => {
  const {user} = useAuth0();

  return (
    <Container className="mb-5" className="profile">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
      </Row>
      <Row>
        {JSON.stringify(user)}
      </Row>
      <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th className="sort" data-sort="name">Courses</th>
                    <th className="sort" data-sort="completion">Completion</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="list">
                  <tr>
                    <th>
                      <div className="media-body">
                          <span className="name mb-0 text-sm">epistemology</span>
                      </div>
                      <div className="media align-items-center">
                          <img alt="test" src={EpistemologyImage} />
                      </div>
                    </th>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="completion mr-2">60%</span>
                        <div>
                          <div className="progress"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    </Container>
  );
};

export default Profile;
