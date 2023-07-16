import { Route, Routes } from 'react-router-dom';
import Home1 from './components/Home1';
import Movie_grid from './components/Movie_grid';
import Movie_list from './components/Movie_list';
import Movie_details from './components/Movie_details';
import Ticket_plan from './components/Ticket_plan';
import Seatplan from './components/Seatplan';
import Movie_checkout from './components/Movie_checkout';
import Movie_food from './components/Movie_food';
import Event from './components/Event';
import Event_detail from './components/Event_detail';
import Speaker from './components/Speaker';
import Ticket_event from './components/Ticket_event';
import Ticket_checkout from './components/Ticket_checkout';
import Sports from './components/Sports';
import Sport_detail from './components/Sport_detail';
import Sport_ticket from './components/Sport_ticket';
import Sport_checkout from './components/Sport_checkout';
import Pages from './components/Pages';
import App_down from './components/App_down';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Error from './components/Error';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './admin/Login';
import Register from './admin/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home1 />} />
      <Route path='/movie_grid' element={<Movie_grid />} />
      <Route path='/movie_list' element={<Movie_list />} />
      <Route path='/movie_details' element={<Movie_details />} />
      <Route path='/ticket_plan' element={<Ticket_plan />} />
      <Route path='/seatplan' element={<Seatplan />} />
      <Route path='/movie_checkout' element={<Movie_checkout />} />
      <Route path='/movie_food' element={<Movie_food />} />
      <Route path='/event' element={<Event />} />
      <Route path='/event_detail' element={<Event_detail />} />
      <Route path='/speaker' element={<Speaker />} />
      <Route path='/ticket_event' element={<Ticket_event />} />
      <Route path='/ticket_checkout' element={<Ticket_checkout />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/sport_detail' element={<Sport_detail />} />
      <Route path='/sport_ticket' element={<Sport_ticket />} />
      <Route path='/sport_checkout' element={<Sport_checkout />} />
      <Route path='/pages' element={<Pages />} />
      <Route path='/app_down' element={<App_down />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/error' element={<Error />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />

    {/* ============ login components ============= */}

      <Route path='/login' element={ <Login/> } />
      <Route path='/register' element={ <Register/> } />
    </Routes>
  );
}

export default App;
