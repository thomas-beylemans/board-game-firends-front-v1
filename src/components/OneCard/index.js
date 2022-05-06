import { Card, Image } from "semantic-ui-react";

import PropTypes from "prop-types";

export default function OneCard({ title, date, location, img, owner, className }) {
  return (
    <Card color="orange" className={className}>      
      <Image  src={img} alt="avatar" wrapped ui centered />      
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{owner}</Card.Meta>
        <Card.Description>{date}</Card.Description>
        <Card.Description>{location}</Card.Description>
      </Card.Content>
    </Card>
  );
}

OneCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  className: PropTypes.string,
};
