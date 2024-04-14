import './App.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox() {
    //const INI_URL= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsaudigazette.com.sa%2Fuploads%2Fimages%2F2019%2F07%2F22%2F1304191.jpg&tbnid=FzIMAn9T5PyBnM&vet=12ahUKEwiEooC9rYWFAxUg-jgGHTSfBzEQMygFegQIARBb..i&imgrefurl=https%3A%2F%2Fsaudigazette.com.sa%2Farticle%2F572622&docid=LJPjNp9pnhLP3M&w=600&h=335&q=dusty%20weather&client=ubuntu&ved=2ahUKEwiEooC9rYWFAxUg-jgGHTSfBzEQMygFegQIARBb";

    let info ={
        temp :25.05,
        humidity:47,
        weather:"haze",

    };
    return(
        <div  className="app" >
            <h1>weather Info</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/home/student/Desktop/01react/a.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          PAPA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
    );
}