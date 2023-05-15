import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function News() {
    const[newsInfo, setNewsInfo] = useState(null);

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_nytimes_api}`)
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(obj => setNewsInfo(obj))
    }, [])
    if(!newsInfo) return <p></p>;
    console.log(newsInfo);

    const stories = newsInfo.results;
    const items = [];
    for(let i=0; i < 5; i++) {
        const link = stories[i].url;
        const title = stories[i].title
        const author = stories[i].byline
        const description = stories[i].abstract

        let item;
        let imgLink;
        let caption;
        if(stories[i].media.length > 0) {
            imgLink = stories[i].media[0]["media-metadata"][2].url;
            caption = stories[i].media[0].caption;
            item = (
                <Card sx={{ maxWidth: 345 }} key={i}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imgLink}
                        title={caption}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2">
                            {author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={link}>Read More</Button>
                    </CardActions>
                </Card>
            )
        }
        else item = (
            <Card sx={{ maxWidth: 345 }} key={i}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle2">
                        {author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={link}>Read More</Button>
                </CardActions>
            </Card>
        )
        items.push(item);
    }

    return (
        <Paper elevation={3} id='news' sx={{ height: '100%', p: '20px', m: '15px' }}>
            <Typography variant='h6'> News</Typography>
            <Paper square elevation={0} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '15px', paddingTop: '4%', height: '95%' }}>
                <Paper square sx={{ height: '90%', overflowY: 'scroll'}}>
                    {items}
                </Paper>
            </Paper>
        </Paper>
    )
}

export default News;