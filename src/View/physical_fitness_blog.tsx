import React, { Component } from "react";
import {
  Sportsprototype,
  Healthprototype,
  HiddenComponent,
} from "../svr/physical_fitness/fitness_prototypes/blog_prototypes";
import "../svr/physical_fitness/css_files/physical_fitness_blog.css";
interface IBlogstates {
  sportsData: any[];
  viewType: string;
  blogDetails: any;
  healthdata: any[]
}
interface IBlogProps {}

class FitnessBlog extends Component<IBlogProps, IBlogstates> {
  state: { sportsData: any[]; healthdata: any[]; viewType: string; blogDetails: string; };
  constructor(props: IBlogProps) {
    super(props);
    this.state = {
      sportsData: [],
      healthdata: [],
      viewType: "BlogHome",
      blogDetails: "",
      
    };
  }

  public componentDidMount(): void {
    try {
      this.getDataBlogOnPageLoad();
    } catch (error) {
      console.log(error);
    }
  }
  public getDataBlogOnPageLoad = () => {
    try {
     
      fetch("https://gnews.io/api/v4/top-headlines?category=sports&max=12&country=us&language=en&apikey=29c6a9482435bc97acb245ce977e8579")
        .then((response) => response.json())
        .then((data) => {
          const sports_Data = data;
          this.setState(
            {
              sportsData: sports_Data.articles,
            },
            () => {
              console.log(sports_Data);
            }
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      fetch(
        "https://gnews.io/api/v4/top-headlines?category=health&max=12&country=us&language=en&apikey=29c6a9482435bc97acb245ce977e8579"
      )
        .then((response) => response.json())
        .then((data) => {
          const health_Data = data;
          this.setState(
            {
              healthdata: health_Data.articles,
            },
            () => {
              console.log(health_Data);
            }
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  render() {
    if (this.state.viewType == "BlogHome") {
      return (
        <div className="blog">
          <h3>THE LATEST SPORTS ARTICLES</h3>
          <div>
            <div className="blog_container">
              {this.state.sportsData.length > 0 &&
              this.state.viewType == "BlogHome"
                ? this.state.sportsData.map((e: any) => {
                    return (
                      <Sportsprototype
                        SportsContent={e}
                        GetBlogDetails={{
                          getBlogDetails: this.getblogDetails.bind(this),
                        }}
                      ></Sportsprototype>
                    ); 
                  })
                : null}
            </div>

            <h3>THE LATEST HEALTH ARTICLES</h3>

            <div className="blog_container">
              {this.state.healthdata.length > 0 &&
              this.state.viewType == "BlogHome"
                ? this.state.healthdata.map((e: any) => {
                    return (
                      <Healthprototype
                        HealthContent={e}
                        GetBlogDetails={{
                          getBlogDetails: this.getblogDetails.bind(this),
                        }}
                      ></Healthprototype>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      );
    } else if (this.state.viewType == "BlogDetails") {
      return (
        <div>
          <HiddenComponent
            BlogDetailedData={this.state.blogDetails}
            getBackToBlogs={{ getBackToBlogs: this.getBackToBlogs.bind(this) }}
          ></HiddenComponent>
        </div>
      );
    }
  }

  public getblogDetails = (e: any): void => {
    try {
      this.setState({
        viewType: "BlogDetails",
        blogDetails: e,
      });
    } catch (error) {
      console.log(error);
    }
  };
  public getBackToBlogs = (): void => {
    try {
      this.setState({
        viewType: "BlogHome",
        blogDetails: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default FitnessBlog;


