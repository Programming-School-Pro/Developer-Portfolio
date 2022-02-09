import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import "./portfolio.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { portfolioData } from "../../data/portfolioData";
import SingleBlog from "./Singleportfolio/singleportfolio";

function Portfolio() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {portfolioData.length > 0 && (
        <div
          className="blog"
          id="portfolio"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Website Templates</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {portfolioData
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <SingleBlog
                    theme={theme}
                    title={blog.title}
                    desc={blog.description}
                    date={blog.date}
                    image={blog.image}
                    url={blog.url}
                    key={blog.id}
                    id={blog.id}
                  />
                ))}
            </div>

            {portfolioData.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/portfolio">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
