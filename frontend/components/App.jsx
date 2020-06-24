import React from "react";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from "react-router-dom";
import Home from "./home/home";
import NavBarContainer from "./navbar/navbar_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import DemoContainer from "./session_form/demo_container";
import QuestionsContainer from "./questions/questions_container";
import CreateQuestionFormContainer from "./questions/create_question_form_container";
import EditQuestionFormContainer from "./questions/edit_question_form_container";
import QuestionDetailContainer from "./questions/question_detail_container";
import CreateAnswerFormContainer from "./answers/create_answer_form_container";
import SearchPage from "./questions/search_page";
import SearchBarContainer from "./questions/search_bar_container";
import TagSearchContainer from "./questions/tag_search_container";
import TagsContainer from "./tags/tags_container";
import UsersContainer from "./users/users_container";
import NotFound from "./not_found";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div id="main-page">
    <header>
      <NavBarContainer />
    </header>
    <main>
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/demo" component={DemoContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />

        <ProtectedRoute exact path="/tags" component={TagsContainer} />
        <ProtectedRoute exact path="/users" component={UsersContainer} />
        <ProtectedRoute
          exact
          path="/questions"
          component={QuestionsContainer}
        />
        <Route path="/search/q=:searchTerm" component={SearchBarContainer} />
        <Route path="/tag_search/q=:tagName" component={TagSearchContainer} />
        <Route path="/questions/tag_search/q=:tagName" component={TagSearchContainer} />
          <ProtectedRoute
          exact
          path="/questions/ask"
          component={CreateQuestionFormContainer}
          />
        <ProtectedRoute
          exact
          path="/questions/:questionId"
          component={QuestionDetailContainer}
        />
        <ProtectedRoute
          exact
          path="/questions/:questionId/edit"
          component={EditQuestionFormContainer}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default withRouter(App);
