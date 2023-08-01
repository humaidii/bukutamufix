import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "../style/login-style.css"
export default function Login() {
    return (
        <>
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="text-center text-login">Login</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-login">Username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="text-login">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="warning" className="mt-3" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
        </>
    )
}