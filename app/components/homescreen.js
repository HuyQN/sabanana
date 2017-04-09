import React from 'react';

export default class HomeScreen extends React.Component {
  render() {
    return (
<div className="container">

  <div className="row">

    <div className="col-md-2">

    <span className="bold">TAGS</span>

    <li role="presentation">board games</li>

    <li role="presentation">sports</li>

    <li role="presentation">music</li>

    <li role="presentation">computers</li>

    <li role="presentation">clothes</li>

    <li role="presentation">language</li>

    <li role="presentation">Date</li>

    <p>_/_/_</p>

    <li role="presentation">Misc</li>

    </div>

<div className="col-md-7">

  <div className="panel panel-default">

    <div className="panel-body">

      <span className="bold">MOST RECENT POSTS</span>

      <p>Looking for tennis partner. <button>sports</button></p>

      <p>Selling a Converse t-shirt for $50. <button>clothes</button></p>

    </div>

  </div>

</div>
</div>
</div>
)
}
}