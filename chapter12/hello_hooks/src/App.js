import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts"
  const todosUrl = "https://jsonplaceholder.typicode.com/todos"
  //initial state
  const [requested, setRequested] = useState("")
  const [data, setData] = useState([]);

  //works like componentsDidMount() as it prevents unnecessary re-renders
  //makes app run faster
useEffect(() => {
  fetch(requested)
  .then(res => res.json())
  .then(data => setData(data)) //data array is then populated from collection
}, [])
//[] :data gets renderd the first time

  return (
    <div>
     {/* displays data from the post collection */}
      <Button varient="link" onClick={() => setRequest(postsUrl)}>
        Posts
      </Button>
      {/* displays data from the todo collection */}
      <Button variant="link" onClick={() => setRequest(todoUrl)}>
        Todos
      </Button>
      <br />
      Requested: {this.state.requested}
      <ul>
        {data}
      </ul>
    </div>
  );
}

export default App;
