import { connect } from "react-redux";
import SearchPage from './search_page';
import { receiveSearchQuestions, clearSearchTerm } from './../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
    return {
      searchTerm: ownProps.match.params.searchTerm,
      results: state.entities.search,
      currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: (searchTerm) => dispatch(receiveSearchQuestions(searchTerm)),
        clear: () => dispatch(clearSearchTerm())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);