import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://192.168.1.14:8080/api/auth/register',
        {
          username,
          password,
          email,
          role,
          name,
          last_name,
        },
      );
      if (response.status === 201) {
        alert('User added successfully');
      }
    } catch (error) {
      alert('Failed to add user');
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '200px' }}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '200px' }}
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '200px' }}
          margin="normal"
        />
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '200px' }}
          margin="normal"
        />
        <TextField
          label="Surname"
          variant="outlined"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          style={{ width: '200px' }}
          margin="normal"
        />
        <FormControl style={{ width: '200px' }} margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="Role"
          >
            <MenuItem value="ROLE_READER">User</MenuItem>
            <MenuItem value="ROLE_ADMIN">Admin</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '30px' }}
        >
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default AddUser;
