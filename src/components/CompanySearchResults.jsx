import { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsFromCompany } from "../redux/actions";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const jobs = useSelector((state) => state.jobsForCompany.content);
  console.log(jobs);
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.jobsForCompany.isLoading);
  const error = useSelector((state) => state.jobsForCompany.hasError);
  const errorMessage = useSelector(
    (state) => state.jobsForCompany.errorMessage
  );

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    // getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatch(getJobsFromCompany(baseEndpoint, params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       // setJobs(data);

  //       dispatch({ type: "JOBS_FOR_COMPANY", payload: data });
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
        {loading && (
          <Col className="my-3">
            <Spinner animation="border" variant="primary" />
          </Col>
        )}

        {error && (
          <Col className="my-3">
            <Alert variant="danger">{errorMessage}</Alert>
          </Col>
        )}

        {!loading && !error && jobs.length > 0 && (
          <Col className="my-3">
            <h1 className="display-4">Job posting for: {params.company}</h1>
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
