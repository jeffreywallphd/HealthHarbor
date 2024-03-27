import * as React from "react";

import moment from "moment";

interface SportsprototypeProps {
  SportsContent: any;
  GetBlogDetails: any;
}
interface SportsprototypeStates {}

interface HealthprototypeProps {
  HealthContent: any;
  GetBlogDetails: any;
}
interface HealthprototypeStates {}

interface IHiddenComponentProps {
  BlogDetailedData: any;
  getBackToBlogs: any;
}
interface IHiddenComponentStates {}

export class Sportsprototype extends React.Component<
SportsprototypeProps,
SportsprototypeStates
> {
  public render(): React.ReactElement<SportsprototypeProps> {
    if (this.props.SportsContent) {
      return (
        <>
          <div
            className="card"
            onClick={() => {
              this.props.GetBlogDetails.getBlogDetails(
                this.props.SportsContent
              );
            }}
          >
            <div className="card__header">
              <img
                src={this.props.SportsContent.image}
                alt="card__image"
                className="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <span className="tag" id="tag-blue">Sports</span>
              <h6>{this.props.SportsContent.title}</h6>
              <p style={{ fontSize: "15px" }}>
                {this.props.SportsContent.description}
              </p>
              <p style={{ fontSize: "15px" }}>
                Source: {this.props.SportsContent.source.name}
              </p>
              <p style={{ fontSize: "10px" }}>
                {moment(this.props.SportsContent.publishedAt).format(
                  "MM/DD/YYYY"
                )}
              </p>
            </div>
          </div>
        </>
      );
    } else {
      <h1>Loading please wait....</h1>;
    }
  }
}

export class Healthprototype extends React.Component<
HealthprototypeProps,
HealthprototypeStates
> {
  public render(): React.ReactElement<HealthprototypeProps> {
    return (
      <>
        <div
          className="div2"
          onClick={() => {
            this.props.GetBlogDetails.getBlogDetails(this.props.HealthContent);
          }}
        >
          <img src={this.props.HealthContent.image} alt="error" />

          <div>
            <h6 className="tag" id="tag-red">Health</h6>
            <h6>{this.props.HealthContent.title}</h6>
            <p>{this.props.HealthContent.description}</p>
            <p style={{ fontSize: "13px" }}>
              {moment(this.props.HealthContent.publishedAt).format(
                "MM/DD/YYYY"
              )}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export class HiddenComponent extends React.Component<
  IHiddenComponentProps,
  IHiddenComponentStates
> {
  public render(): React.ReactElement<IHiddenComponentProps> {
    return (
      <div className="hiddencomponent">
        <div className="hiddenGoBackBtn">
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.getBackToBlogs.getBackToBlogs();
            }}
          >
            X
          </button>
        </div>
        <div className="hiddencomponentdiv">
          <div className="hiddencomponentImage">
            <img src={this.props.BlogDetailedData.image} alt="error" />
          </div>

          <div>
            <h2>{this.props.BlogDetailedData.title}</h2>

            <p className="content">{this.props.BlogDetailedData.content}</p>
            <small>
              {moment(this.props.BlogDetailedData.date).format("MM/DD/YYYY")}
            </small>
          </div>
        </div>
      </div>
    );
  }
}
