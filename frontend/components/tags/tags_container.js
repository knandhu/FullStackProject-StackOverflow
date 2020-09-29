import { connect } from 'react-redux';
import { receiveTags } from './../../actions/tag_actions';
import TagsIndex from './tags_index';
//
const mapStateToProps = state => {
    
    return {
        tags: state.entities.tags
    }
};

const mapDispatchToProps = dispatch => {
    return{
        fetchTags: () => dispatch(receiveTags())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);
