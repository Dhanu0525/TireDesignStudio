import React, { useState, useRef, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Image1 from '../Images/process1.jpeg';
import Image2 from '../Images/process2.jpeg';
import Image3 from '../Images/MTire.webp';
import Image4 from '../Images/process4.jpeg';
import Image5 from '../Images/process5.jpeg';
import Image6 from '../Images/process6.jpeg';
import Picture1 from '../Images/Picture1.png';
import Picture2 from '../Images/Picture2.png';
import Picture3 from '../Images/Picture3.png';
import Picture4 from '../Images/Picture4.png';
import Picture5 from '../Images/Picture5.png';
import Picture6 from '../Images/Picture6.png';
import Picture7 from '../Images/Picture7.PNG';
import Picture8 from '../Images/Picture8.PNG';
import FYT from '../Images/FYT.png'; 
import FYTT from '../Images/FYTT.png';
import { Nav } from "react-bootstrap";
//import * as THREE from 'three';
//import { Canvas, useFrame } from 'react-three-fiber';
//import React, { useState, useRef, useEffect } from "react";
export default function Topics() {
    // Create separate state variables for each modal
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);

    // Create separate handlers for each modal
    const handleCloseModal1 = () => {
        setShowModal1(false);
    };
    const handleOpenModal1 = () => {
        setShowModal1(true);
    };

    const handleCloseModal2 = () => {
        setShowModal2(false);
    };
    const handleOpenModal2 = () => {
        setShowModal2(true);
    };

    const handleCloseModal3 = () => {
        setShowModal3(false);
    };
    const handleOpenModal3 = () => {
        setShowModal3(true);
    };
    
    const handleCloseModal4 = () => {
        setShowModal4(false);
    };
    const handleOpenModal4 = () => {
        setShowModal4(true);
    };

    const handleCloseModal5 = () => {
        setShowModal5(false);
    };
    const handleOpenModal5 = () => {
        setShowModal5(true);
    };
    
    const handleCloseModal6 = () => {
        setShowModal6(false);
    };
    const handleOpenModal6 = () => {
        setShowModal6(true);
    };
// Function to draw a circle with text on the canvas
const canvasRef = useRef(null);

useEffect(() => {
    // Call the drawCircles function when the component mounts
    drawCircles();
}, []);

// Function to draw circles and an arrow on the canvas
// Function to draw circles and a rectangle with text on the canvas
const drawCircles = () => {
    const canvas = canvasRef.current;
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set circle properties
        const circleRadius = 25;
        const circleDistance = 150; // Adjust the distance as needed

        // Calculate circle center positions
        const hpCenterX = canvas.width / 2;
        const hpCenterY = canvas.height / 2 - circleDistance / 2;

        const bsmCenterX = canvas.width / 2;
        const bsmCenterY = canvas.height / 2 + circleDistance / 2;

        // Draw the rectangle with text "Mixing" above the circles
        ctx.fillStyle = 'black';
        ctx.fillRect(hpCenterX - 40, hpCenterY - circleRadius - 40, 80, 30); // Rectangle coordinates and size
        ctx.fillStyle = 'white'; // Text color (changed to white for better visibility)
        ctx.font = '12px Arial'; // Font style
        ctx.fillText('Mixing', hpCenterX, hpCenterY - circleRadius - 20); // Text position

        // Draw the first circle with text "HP 9000"
        ctx.beginPath();
        ctx.arc(hpCenterX, hpCenterY, circleRadius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.fillText('HP 9000', hpCenterX - 20, hpCenterY);

        // Draw an arrow connecting the two shapes
        const arrowStartX = hpCenterX;
        const arrowStartY = hpCenterY + circleRadius;
        const arrowEndX = hpCenterX;
        const arrowEndY = hpCenterY - circleRadius - 40;

        // Draw the arrow line
        ctx.beginPath();
        ctx.moveTo(arrowStartX, arrowStartY);
        ctx.lineTo(arrowEndX, arrowEndY);
        ctx.stroke();

        // Draw the arrowhead
        const arrowheadSize = 8;
        const angle = Math.atan2(arrowEndY - arrowStartY, arrowEndX - arrowStartX);
        ctx.beginPath();
        ctx.moveTo(arrowEndX - arrowheadSize * Math.cos(angle - Math.PI / 6), arrowEndY - arrowheadSize * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(arrowEndX, arrowEndY);
        ctx.lineTo(arrowEndX - arrowheadSize * Math.cos(angle + Math.PI / 6), arrowEndY - arrowheadSize * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
    }
};


  

    return (
        <div style={{ backgroundColor: '#0047AB' }}>
            <Nav />
            <div className="d-flex mb-3 mt-3 justify-content-center align-items-center vh-80">
                <Row className="gx-3">
                    <Col>
                        <Card style={{ width: '18rem', height: '25rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)' }}>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Mixing</Card.Title>
                                <Card.Text className="text-justify">
                                    Converts raw compounds to rubber compounds. Uses BSM,FYT digital systems.
                                </Card.Text>
                                <Button variant="primary" className="mt-auto" onClick={handleOpenModal1}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Modal 1 */}
                    <Modal size="xl" show={showModal1} onHide={handleCloseModal1} centered>
                        <Modal.Header style={{ backgroundColor: '#0047AB', color: 'white' }} closeButton>
                            <Modal.Title>Mixing</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '##FFFFE0', maxHeight: '400px', overflowY: 'auto' }}>
                            <h4>L2-HP 9000</h4>
                            <ul>
                                <li>Interacts with mixers to push the recipe data and talk to PLC.</li>
                                <li>Has sensitive data and can interact with BSM.</li>
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture1} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>

                            <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                            <h4>RPRP</h4>
                            <ul>
                                <li>Quality validation system to make sure components going into the mixer are correct.</li>
                            </ul>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture2} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#f5e838" }}>
                            <Button variant="secondary" onClick={handleCloseModal1}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Col>
                        <Card style={{ width: '18rem', height: '25rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)' }}>
                            <Card.Img variant="top" src={Image2} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Tire Preparation</Card.Title>
                                <Card.Text className="text-justify">
                                    Takes raw compounds from mixes and prepares beads thread side wall.
                                </Card.Text>
                                <Button variant="primary" className="mt-auto" onClick={handleOpenModal2}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Modal 2 */}
                    <Modal size="xl" show={showModal2} onHide={handleCloseModal2} centered>
                        <Modal.Header style={{ backgroundColor: '#0047AB', color: 'white' }} closeButton>
                            <Modal.Title>Tire Preparation</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '##FFFFE0', maxHeight: '400px', overflowY: 'auto' }}>
                            <h4>FYT</h4>
                            <ul>
                                <li>Traceability for components in parts of Prep and Tirebuilding. Keeps track of individual components and also uncured tires.</li>
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={FYT} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>

                            <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                            <h4>FYT LOGIN</h4>
                            <ul>
                                <li>Console version of FyT used by Tuggers for moving products between posts and parking spots.</li>
                            </ul>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={FYTT} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#f5e838" }}>
                            <Button variant="secondary" onClick={handleCloseModal2}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Col>
                        <Card style={{ width: '18rem', height: '25rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)' }}>
                            <Card.Img variant="top" src={Image3} style={{ height: "50%" }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Tire Building</Card.Title>
                                <Card.Text className="text-justify">
                                    Assembles the tire components. We use FYT for tracking the tires.
                                </Card.Text>
                                <Button variant="primary" className="mt-auto" onClick={handleOpenModal3}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Modal 3 */}
                    <Modal size="xl" show={showModal3} onHide={handleCloseModal3} centered>
                        <Modal.Header style={{ backgroundColor: '#0047AB', color: 'white' }} closeButton>
                            <Modal.Title>Tire Building</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '##FFFFE0', maxHeight: '400px', overflowY: 'auto' }}>
                            <h4>TBL2</h4>
                            <ul>
                                <li>Tirebuilding Level 2 for maintaining and pushing recipes on Tirebuilding machines.</li>
                                <li>Keeps track of what is produced per machine.</li>
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture4} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>

                            <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                            <h4>COMALI</h4>
                            <ul>
                                <li>Scale weight application for measure weights of tires as they are produced on tirebuilding machines.</li>
                                <li>Controls tolerances for how much a tire should weigh.</li>
                            </ul>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture5} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#f5e838" }}>
                            <Button variant="secondary" onClick={handleCloseModal3}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </div>

            <div className="d-flex justify-content-center mt-2 py-4 align-items-center vh-120">
                <Row className="gx-3">
                    <Col>
                        <Card style={{ width: '18rem', height: '25rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)' }}>
                            <Card.Img variant="top" src={Image4} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Curing</Card.Title>
                                <Card.Text className="text-justify">
                                    Cures the tire and uses GRQ2.
                                </Card.Text>
                                <Button variant="primary" className="mt-auto" onClick={handleOpenModal4}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Modal 4 */}
                    <Modal size="xl" show={showModal4} onHide={handleCloseModal4} centered>
                        <Modal.Header style={{ backgroundColor: '#0047AB', color: 'white' }} closeButton>
                            <Modal.Title>Curing</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '##FFFFE0', maxHeight: '400px', overflowY: 'auto' }}>
                            <h4>Oscar Sharp / OscarNG</h4>
                            <ul>
                                <li>Traceability system that tracks what tires are being cured in what press.</li>
                                <li>Has a scangun component for Curemen entering tires into presses.</li>
                                <li>Keeps track of painter records to ensure that enough time has passed before curing.</li>
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture6} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#f5e838" }}>
                            <Button variant="secondary" onClick={handleCloseModal4}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Col>
                        <Card style={{ width: '18rem', height: '25rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)' }}>
                            <Card.Img variant="top" src={Image5} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Tire Verification</Card.Title>
                                <Card.Text className="text-justify">
                                    Verifies the quality of tire. Uses GRQ2, Oscar for verification.
                                </Card.Text>
                                <Button variant="primary" className="mt-auto" onClick={handleOpenModal5}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Modal 5 */}
                    <Modal size="xl" show={showModal5} onHide={handleCloseModal5} centered>
                        <Modal.Header style={{ backgroundColor: '#0047AB', color: 'white' }} closeButton>
                            <Modal.Title>Tire Verification</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '##FFFFE0', maxHeight: '400px', overflowY: 'auto' }}>
                            <h4>Giraf APC - Product Card - Tire Data</h4>
                            <ul>
                                <li>Routing application that handles messages between different systems.</li>
                                <li>In TV, it helps autopal know what a tire is to properly direct and stack it.</li>
                            </ul>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture3} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>
                            <hr style={{ borderTop: '3px solid black', margin: '20px 0' }} />
                            <h4>GRQ2</h4>
                            <ul>
                                <li>System used for tracking the quality information of individual tires​.</li>
                                <li>Primarily in TV where tires are inspected and repaired, but also in Tirebuilding (Before Cure Repair). ​</li>
                            </ul>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture7} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#f5e838" }}>
                            <Button variant="secondary" onClick={handleCloseModal5}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </div>

            <div className="d-flex justify-content-center mt-2 py-4 align-items-center vh-120">
                <Row className="gx-3">
                    <Col>
                        <Card style={{ width: '18rem', height: '25rem', boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)' }}>
                            <Card.Img variant="top" src={Image6} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>Warehouse</Card.Title>
                                <Card.Text className="text-justify">
                                    Ships to customers.
                                </Card.Text>
                                <Button variant="primary" className="mt-auto" onClick={handleOpenModal6}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Modal 6 */}
                    <Modal size="xl" show={showModal6} onHide={handleCloseModal6} centered>
                        <Modal.Header style={{ backgroundColor: '#0047AB', color: 'white' }} closeButton>
                            <Modal.Title>Warehouse</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: '##FFFFE0', maxHeight: '400px', overflowY: 'auto' }}>
                            <h4>Geode</h4>
                            <ul>
                                <li>Traceability application for tracking pallets of tires and where they are parked. Used to help generate shipments of tires exiting the plant.</li>
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Picture8} alt="Image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer style={{ backgroundColor: "#f5e838" }}>
                            <Button variant="secondary" onClick={handleCloseModal6}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </div>

            {/* Canvas Element */}
            <canvas ref={canvasRef} width={1000} height={800}></canvas>
        </div>
    );
}