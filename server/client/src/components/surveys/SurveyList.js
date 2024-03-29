import React from 'react';
import {connect} from "react-redux";
import {fetchSurveys} from "../../actions";

class SurveyList extends React.Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card blue-grey darken-1" key={survey._id}>
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        {/*eslint-disable-next-line*/}
                        <a>Yes: {survey.yes}</a>
                        {/*eslint-disable-next-line*/}
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({surveys}) {
    return {surveys};
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);