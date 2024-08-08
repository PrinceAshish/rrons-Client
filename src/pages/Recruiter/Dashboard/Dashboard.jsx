import React from "react";
import RecruiterLayout from "../../../components/recruiterLayout/recruiterLayout";
import { Card, ListGroup, Row } from "react-bootstrap";
import "./Dashboard.scss"; 

const cardWidth = "18rem";  // Extracted constant for card width

const cardData = [
  {
    header: "OverView",
    items: [
      "Jobs Posted : 20",
      "Active Jobs : 10",
      "Inactive Jobs : 10",
      "Quick Links: Create a job Posting"
    ]
  },
  {
    header: "Recent Job Posts",
    items: [
      "",
      "Software Tester",
      "Product Manager",
      "Human Resource"
    ]
  },
  {
    header: "Recent Applicants",
    items: [
      "",
      "Yash Ahire (Software Tester)",
      "John Doe (Product Manager)",
      "John Doe2 (Product Manager)"
    ]
  }
];

const cardData2 = [
  {
    header: "Job Performance",
    items: [
      "Job Views :  100",
      "Application Rates:  50 ",
      "Interview Done : 10",
    ]
  },
  {
    header: "Subscription Plan",
    items: [
      "Your Subscription Plan is : Pro",
      "Days Left For Subscription Plan Expiry: 10",
      "Recharge Plan : Link",
    ]
  },
  {
    header: "Resource Center/Help",
    items: [
      "Guides and Tips : link",
      "Customer Support : 9638527410"
    ]
  }
];

function CardSection({ cardData }) {
  return (
    <Row className="dashboard-row">
      {cardData.map(({ header, items }, index) => (
        <Card key={index} style={{ width: cardWidth }}>
          <Card.Header>{header}</Card.Header>
          <ListGroup variant="flush">
            {items.map((item, idx) => (
              <ListGroup.Item key={idx}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </Row>
  );
}

function Dashboard() {
  return (
    <RecruiterLayout>
      <CardSection cardData={cardData} />
      <CardSection cardData={cardData2} />
    </RecruiterLayout>
  );
}

export default Dashboard;
