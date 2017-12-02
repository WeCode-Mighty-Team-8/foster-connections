import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import avatarPhoto from '../assets/img/ketan-rajput-345427.jpg';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>More Info</MenuItem>
    <MenuItem>Email</MenuItem>
  </IconMenu>
);

const ShopList = ({ resources }) => (
  <List>
    <Subheader>Families, Resources and Mentors</Subheader>
    {resources.map(resource  => {
      return <div key={resource.name}>
        <ListItem
          leftAvatar={<Avatar src={avatarPhoto} />}
          rightIconButton={rightIconMenu}
          primaryText={resource.name}
          secondaryText={
            <p>
              <span style={{ color: darkBlack }}>{resource.category}</span> | {resource.description}
              {resource.shopUrl}
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
      </div>;
    })}
  </List>
);

export default ShopList;