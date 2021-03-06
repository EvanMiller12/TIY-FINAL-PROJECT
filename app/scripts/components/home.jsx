var React = require('react');

var User = require('../models/user.js').User;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;
var ExBarChart = require('./ex_bar_chart.jsx').ExBarChart;


class HomeContainer extends React.Component {
  render(){

    var degreeSelectNav = User.current() ? "#degree/" : "#auth/";

    return(
      <BaseLayout>
        <Banner />
        <div className="light-gray-bkgrnd row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="row leave-rev-contain">
              <div className="col-sm-6 col-md-6">
                <div className="home-img">
                  <img src="images/world-logo.png" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="description">
                  <h3>Write Review</h3>
                  <p>Write a review to help potential students or current students better understand the value of the degree they will be earning.</p>
                  <div className="leave-rev-btn">
                    <a href="#review/create/" className="btn btn-primary" role="button">Write Review</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row find-deg-contain">
              <div className="col-sm-6 col-md-6">
                <div className="description">
                  <h3>Find Degrees</h3>
                  <p>Review the average salary by degree from government data, as well as a list of schools where the information came from for the selected field of study.</p>
                  <div className="find-degree-btn">
                    <a href={degreeSelectNav} className="btn btn-primary" role="button">Find Degrees</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="ex-bar-chart">
                  <ExBarChart />
                  <label>Average Salary for: History Major</label>
                </div>
              </div>
            </div>
            <div className="row find-rev-contain">
              <div className="col-sm-6 col-md-6">
                <div className="home-img">
                  <img src="images/check-list-logo.png" />
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="description">
                  <h3>Find Reviews</h3>
                  <p>
                    Find information including salary, job placement,
                    and much more from reviews written by people who have earned
                    a degree in the particular field of study.
                  </p>
                  <div className="find-rev-btn">
                    <a href="#review/" className="btn btn-primary" role="button">Find Reviews</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }
}

class Banner extends React.Component{
  render(){
    return(
      <div className="row banner-contain">
        <div className="jumbotron home-banner">
          <img src="images/degree-scale.png" />
          <div className="mission-statement col-md-offset-4">
            <h1>Discover The Value of an Education</h1>
          </div>
        </div>
      </div>

    )
  }
}

module.exports = {
  HomeContainer
}
