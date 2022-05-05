import { Card, Image } from "semantic-ui-react";

import PropTypes from "prop-types";

export default function OneCard({ title, date, location, img, owner }) {
  return (
    <Card color="orange">
      <Image src={img} alt="avatar" wrapped ui size="medium" centered />
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
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
