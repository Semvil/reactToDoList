import './App.scss';
import React, {FC, useState, ChangeEvent} from 'react';
import ToDoTask from './toDoTask';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { Task } from './Task';
import IconButton from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeThemedStyles } from './hooks/useThemedStyles';


const App: React.FC = () => {
  const { styles } = useStyles();
  const [todoName, setTodoName] = useState<string>('');
  const [todoList, setTodoList] = useState<Task[]>([]);

  function handleChange (event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "todoName") {
      setTodoName(event.target.value);
    }
  };

  function addTask  (): void {
    const newTask = { taskName: todoName, id:uuidv4() };
      setTodoList([...todoList, newTask]);
  };

  function removeTask(id: any): void {
    const removedArr = [...todoList].filter(todo => todo.id !== id);
      setTodoList(removedArr);
  };

  return (
    <Box sx = {styles.container}>
      <Typography variant="h1" align='center'>
        Plans for the day:
      </Typography>

      <Typography variant="h2" align='center'>
        My Tasks
      </Typography>
    
      <Container>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center">
          
          <Grid item>
            <TextField id="outlined-basic" defaultValue="Small" size="small" label="Outlined" variant="outlined" type="text" name='todoName' fullWidth onChange={handleChange} value={todoName} sx={{
              input: {
                color: 'black',
                fontSize: '25px'
              }
            }} />  
          </Grid>
          
          <Grid item>
            <Button className='Addtask' variant="contained" color="success" onClick={addTask}>
              Add task
            </Button>
          </Grid>
        </Grid>
      </Container>
      
      <Container>
        <Grid
          item
          container
          spacing={0}
          direction='column'  
          alignItems="center"
          justifyContent="center">
          
          {todoList.map((todoName: Task) => {
            return (
            <>
              <Grid item sx={{
                margin: '15px'
                }}>
                <Typography sx={{
                  fontSize: '40px',
                  textAlign: 'center',
                  lineHeight: '40px'
                  }}> <ToDoTask task={todoName} /> </Typography>
                <IconButton sx={{ color: "red" }} aria-label="delete" size='large' onClick={() => removeTask(todoName.id)}>
                  <DeleteIcon fontSize="inherit" sx={{
                    fontSize: '25px',
                    color: "red"
                  }}> </DeleteIcon>
                </IconButton>
              </Grid>               
            </>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

const useStyles = makeThemedStyles()(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    py: 4,
  },
}));

export default App;





