import React from "react";
import "../rightbar/ProductSold.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductSold() {
  return (
    <>
      <div className="product-sold"  >
        <Card  >
          <CardMedia
            
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              Product Sold
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2.6% than last week
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      {/* //carousel test */}
   
    </>
  );
}

export default ProductSold;
