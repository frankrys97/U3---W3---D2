import { useState } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
// import { setJobs } from "../redux/actions";
import { handleSubmitAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const jobs = useSelector((state) => state.jobs.content);
  console.log(jobs);
  const loading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.hasError);
  const errorMessage = useSelector((state) => state.jobs.errorMessage);
  const clickOnForm = useSelector((state) => state.jobs.clickOnForm);

  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(baseEndpoint + query + "&limit=20");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       // dispatch({ type: "SET_JOBS", payload: data });
  //       dispatch(setJobs(data));
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-between">
            <h1 className="display-1">Remote Jobs Search</h1>
            <div className="d-flex justify-content-between align-items-center">
              <Link className="btn btn-primary" to="/favouriteCompanies">
                <FaStar className="text-warning" /> Favourites Companies
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) =>
              dispatch(handleSubmitAction(e, baseEndpoint, query))
            }
          >
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {loading && !error && (
          <Col xs={10} className="mx-auto mt-2 text-center">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        )}
        {error && (
          <Col xs={10} className="mx-auto mt-2">
            <Alert variant="danger">{errorMessage}</Alert>
          </Col>
        )}
        {/* 
        {!loading && !error && jobs.length === 0 && (
          <Col xs={10} className="mx-auto mt-2">
            <Alert variant="info">Try to search for something</Alert>
          </Col>
        )} */}
        {!loading && !error && jobs.length === 0 && clickOnForm ? (
          <Col xs={10} className="mx-auto mt-2">
            <Alert variant="warning">No position available</Alert>
          </Col>
) : (
          !loading &&
          !error &&
          jobs.length > 0 && (
            <Col xs={10} className="mx-auto mb-5">
              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
