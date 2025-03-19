import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LayersIcon from "@mui/icons-material/Layers";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import GroupIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router";

const CollapseListItem = ({ links }: any) => {
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
            {links.children.map((child: any, index: number) => (
              <ListItem disablePadding divider key={index}>
                <ListItemButton onClick={() => navigate(child.path)}>
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
    icon: <DashboardIcon />,
    path: "/dashboard",
  },

  {
    label: "All Pages",
    icon: <LayersIcon />,
    path: "/student",
    children: [
      {
        label: "Students",
        icon: <GroupIcon />,
        path: "/student",
      },
      {
        label:"Teachers",
        icon:<GroupIcon/>,
        path:"/teacher"
      },
      {
        label:"Parents",
        icon:<GroupIcon/>,
        path:"/parent"
      },
      {
        label: "Roles",
        icon: <LayersIcon />,
        path: "/roles",
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
