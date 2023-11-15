import * as React from "react";
import "./index.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Stack, Button } from "@mui/material";

const FormList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    const newTodo = todos.filter((item) => id === item.id);
    setTodos(newTodo);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper",}}>
      {todos.map((item) => (
        <ListItem
          key={item.id}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="error"
                  style={{marginLeft: "100%"}}
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </Stack>
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ListItemText primary={item.email} />
            <ListItemText primary={item.password} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default FormList;
