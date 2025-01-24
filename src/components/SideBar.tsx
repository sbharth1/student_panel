import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { Mail } from "@mui/icons-material";
import  { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router";

const CollapseListItem = ({ links }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() =>
            links.children ? setIsOpen(!isOpen) : navigate(links.path)
          }
        >
          <ListItemIcon>{links.icon}</ListItemIcon>
          <ListItemText primary={links.label} />
          {links.children && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </ListItemButton>
      </ListItem>

      {links.children && (
        <Collapse in={isOpen}>
          <List>
            {links.children.map((child:any, index:number) => (
              <ListItem disablePadding divider key={index}>
                <ListItemButton onClick={() => navigate(links.path)}>
                  <ListItemIcon>{child.icon}</ListItemIcon>
                  <ListItemText primary={child.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const Navlinks = [
  {
    label: "Dashboard",
    icon: <Mail />,
    path: "/dashboard",
  },

  {
    label: "Students",
    icon: <Mail />,
    path: "/student",
    children: [
      {
        label: "Students",
        icon: <Mail />,
        path: "/student",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <List>
      {Navlinks.map((link, index) => (
        <CollapseListItem key={index} links={link} />
      ))}
    </List>
  );
};

export default Sidebar;
