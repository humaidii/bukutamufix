import { Image, Container, Col, Row } from "react-bootstrap"
import kemenagImage from "../assets/images/kemenag.png"
import moderImage from "../assets/images/moderasi.png"
export default function Kemenag() {
    return (
        <>
            <Container>
              <Row>
                <Col>
                <div className='kemenag-wrapper mb-4'>
                    <Image src={kemenagImage} alt="Logo Kemenag" className="kmng-img"/>
                    <div className="tt1">
                        <div className='text-uppercase title'>Kantor Kementerian Agama Pematang Siantar</div>
                        <div className='text-uppercase kemenag-text mt-3'>Isi Data Anda Dibawah ini</div>
                    </div>
                    <Image src={moderImage} alt="Logo Moderasi" className="images"/>
                    </div>
                </Col>
              </Row>
            </Container>
        </>
    )
}