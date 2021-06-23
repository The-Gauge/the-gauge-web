import { Box, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Heading } from '../../components/UI/Heading'
import image from '../../assets/img/science.jpg'
import { publicUrl } from '../../urlConstants'
import { useHistory } from 'react-router-dom'


const SearchItem = ({article}) => {

  const history =  useHistory()
    const onClick = () => {
      history.push(`/article/${article._id}`)
    }

    return (
      <Box
        onClick={onClick}
        className="container-row"
        style={{
          padding: "2rem",
          borderBottom: "1px solid black",
          width: "100%",
          cursor:'pointer'
        }}
      >
        <Box
          className="container-row"
          style={{
            height: "10rem",
            width: "10rem",
            backgroundImage: `url("${publicUrl}${article.articlePictures[0].imgLink}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box
          className="container-column"
          justifyContent="space-between"
          style={{
            height: "10rem",
            width: "100%",
            alignItems: "flex-start",
            marginLeft: "3rem",
          }}
        >
          <Box
            className="container-row"
            justifyContent="space-between"
            style={{ width: "100%" }}
          >
            <Typography variant="h1">{article.name} </Typography>
            <Typography variant="h1">{article.minutesRead.text} </Typography>
          </Box>
          <Box className="container-row">
            <Typography variant="h2">
              {article.shortText}{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
}

export const Search = () => {

    const articles = useSelector(state => state.articles)
    const [data, setData] = React.useState(articles.articles)

    useEffect(() => {
      window.scrollTo(0,0);
        setData(articles.articles)
    }, [articles.articles])
    return (
        <>
    
            <Heading name={articles.searchTerm ? `Search Results for "${articles.searchTerm}"` : "Search our work"} ></Heading>
            { articles.loading ? "Loading" : (
                
                <Box className="container-column" style={{marginTop:'2rem', padding:'0 4rem'}}>
        { articles && data && data.length > 0 ? data.map((article) => {
            return (
                <SearchItem article={article}/>
            )
        })
            
        :
        "No Results Found"
            }
            </Box>
            )}
            
            
            
        </>
    )
}
