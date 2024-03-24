"use client";
import React, { useState } from "react";
import {
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#F5F5F5",
    color: "#09090A",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#09090A",
  },
}));

const listItems = [
  {
    listIcon: <i className="bi bi-bar-chart fs-5"></i>,
    listText: "المنتجات",
    link: "/admin/products",
  },
  {
    listIcon: <i className="bi bi-view-list fs-5"></i>,
    listText: "الطلبات",
    link: "/admin/orders",
  },
  {
    listIcon: <i className="bi bi-person-gear fs-5"></i>,
    listText: "طلبات الدعم",
    link: "/admin/order-support",
  },
];
export default function App() {
  const router = useRouter();
  const logOut = () => {
    window.localStorage.removeItem("authAdminPanel");
    router.push("/admin/login");
  };
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Box>
        <Avatar
          className={classes.avatar}
          src="https://i.ibb.co/rx5DFbs/avatar.png"
          alt="Juaneme8"
        />
      </Box>
      <Box>
        <div className="search px-2">
          <input
            type="text"
            placeholder="بحث ... "
            className="form-control pe-5"
          />
        </div>
      </Box>
      <Divider />
      <Box
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          display: "flex",
          minHeight: "80%",
        }}
      >
        <List>
          {listItems.map((listItem, index) => (
            <Link
              key={index}
              href={listItem.link}
              className="text-decoration-none"
            >
              <ListItem className={classes.listItem} button>
                <ListItemIcon className={classes.listItem}>
                  {listItem.listIcon}
                </ListItemIcon>
                <ListItemText>
                  <span className="fs-6 fw-bold">{listItem.listText}</span>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
        <List>
          <ListItem className={classes.listItem} button onClick={logOut}>
            <ListItemIcon className={classes.listItem}>
              <i className="bi bi-box-arrow-in-left fs-5"></i>
            </ListItemIcon>
            <ListItemText>
              <span className="fs-6 fw-bold">تسجيل الخروج</span>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Toolbar>
        <IconButton onClick={toggleSlider}>
          <Menu />
        </IconButton>
        <Drawer open={open} anchor="right" onClose={toggleSlider}>
          {sideList()}
        </Drawer>
      </Toolbar>
    </>
  );
}
