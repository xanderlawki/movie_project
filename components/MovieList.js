import React, {Component} from 'react';




class MovieList extends Component {
   shortenMovies = (text)=> {
     if(text && text.length >= 200) {
      return text.substr(0, 200) + '...';
     }
     return text
     
   }
    render() {

      const {movies} = this.props


        return (
            <React.Fragment>

              {
                movies.map(movies => (
                  <div key={movies.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={movies.image} alt="" /></a>
                    <div className="card-body">
                      <h4 className="card-title">
                        <a href="#">{movies.name}</a>
                      </h4>
                     
                <p className="card-text">{this.shortenMovies(movies.description)}</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">{movies.rating}</small>
                    </div>
                  </div>
                </div>
                ))
              }
           
            </React.Fragment>
        )
    }
}


export default MovieList