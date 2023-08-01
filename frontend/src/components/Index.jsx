import { Button, Form, Row, Col, Container } from "react-bootstrap"
import "../style/index.css"
export default function Index() {
    return (
    <>
    <Container>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama lengkap anda" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDate">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formTime">
              <Form.Label>Jam</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control type="tel" placeholder="No. Hp" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formInstansi">
              <Form.Label>Asal Instansi</Form.Label>
              <Form.Control type="text" placeholder="Instansi" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formSatker">
              <Form.Label>Bagian/Satuan Kerja</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formNeed">
              <Form.Label>Keperluan</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Keperluan" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="warning" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </>
    )
}