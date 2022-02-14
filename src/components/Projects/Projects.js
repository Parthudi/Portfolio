import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from "@mui/icons-material";

const Projects = () => (
  <div>
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>  
            <Img src={p.photo} alt="Project Picture" />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>

  <span>
    {projects.map((p, i) => {
      return (
        <Card sx={{ maxWidth: 545 }}>
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image={p.photo}
            alt="project image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stack
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {p.description}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
            </Typography>
          </CardContent>
          <CardActions>
            <Button> <a href={p.visit} target="_blank"> Code </a></Button>
            <Button> <a href={p.source} target="_blank"> Source </a></Button>
          </CardActions>
      </Card>
    )})}
    </span>
  );
  </div>
);

export default Projects;