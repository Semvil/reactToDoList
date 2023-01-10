import './App.scss';
import React, {FC, useState, ChangeEvent} from 'react';
import ToDoTask from './toDoTask';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";
import { ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { Task } from './Task';
import IconButton from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { height, lineHeight } from '@mui/system';

const App: React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [todoName, setTodoList] = useState<Task[]>([]);

  function handleChange (event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  function addTask  (): void {
    const newTask = { taskName: task, id:uuidv4() };
      setTodoList([...todoName, newTask]);
  };

  function removeTask(id: any): void {
    const removedArr = [...todoName].filter(todo => todo.id !== id);
      setTodoList(removedArr);
  };

  return (
    <Box component={'div'}>
      <Typography variant="h1" align = 'center'>
        Plans for the day:
      </Typography>

      <Typography variant="h2" align = 'center'>
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
            <TextField id="outlined-basic" defaultValue="Small" size="small" label="Outlined" variant="outlined" type="text" name='task' fullWidth onChange={handleChange} value={task} sx={{
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
          direction = 'column'  
          alignItems="center"
          justifyContent="center">
          
          {todoName.map((task: Task) => {
            return (
            <>
              <Grid item sx={{
                margin: '15px'
                }}>
                <Typography sx={{
                  fontSize: '40px',
                  textAlign: 'center',
                  lineHeight: '40px'
                  }}> <ToDoTask task={task} /> </Typography>
                <IconButton sx={{ color: "red" }} aria-label="delete" size='large' onClick={() => removeTask(task.id)}>
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

export default App;





