import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Actions from './Actions';


export default function PostCard(props) {
 const{user,id,title,content,image,timestamp} =props.post;

  return (
    <Card sx={{ width: "100%", boxShadow:"0 0  15px rgb(0,0,0,0.2)",borderRadius:"10px" }} id={id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.slice(0,1)}
          </Avatar>
        }
        action={
          <Actions id={id}/>
        }
        title={title}
        subheader={timestamp}
      />
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt={user}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      
    </Card>
  );
}