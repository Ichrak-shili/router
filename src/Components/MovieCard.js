import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Link,Route} from 'react-router-dom';
const MovieCard=({match,movieData})=>{

 let card=movieData.find(p=>p.id==match.params.id);
 let element;
 let des;
 let trailer;
  
  if(card)

 { element=<div className="card mb-3" style={{maxWidth: "540px"}} >
  <div className="row no-gutters">
    <div className="col-md-4" style={{backgroundImage:`url(${card.info.poster})`}}>
    
    </div>
    <div className="col-md-8">
      <div className="card-body" >
        <h5 className="card-title">Movie Details</h5>
        <h1 className="card-title">{card.info.title}</h1>
  <p className="card-text"><small className="text-muted">Rating:{card.info.rate}/10</small></p>
   <ul>
       <li><Link to={ `${match.url}/description`} >Description</Link></li>
       <li><Link to={ `${match.url}/trailer`} >Trailer</Link></li>
   </ul>
        
        
      </div>
    </div>
  </div>
</div>

des=<div className="card" style={{width:"50%"}}>
<h5 className="card-header">Description</h5>
<div className="card-body">
  
<p className="card-text">{card.info.description}</p>
  <Link to="/Home">Return to Home </Link>
</div>
</div>;
trailer=<><div style={{width:"50%", height:"50%"}} className="embed-responsive embed-responsive-16by9">
<iframe className="embed-responsive-item" src={card.info.trailer} allowFullScreen></iframe>
</div>
<Link to="/Home">Return to Home </Link></>;

 }
else element= <h2> Sorry. Movie doesnt exist </h2>;

return (<>
 
 <Route exact path={`${match.url}`} render={()=>element}/>
{card?<Route path={ `${match.url}/description`} render={()=>des}/>:null}
{card?<Route path={ `${match.url}/trailer`} render={()=>trailer}/>:null}
 
  

  </>
  );
 
/* return(
    <>
    
<Switch>

<Route exact path={`/Add/MovieCard`}  render={()=> element }  />
<Route path="/MovieList" render={()=>element}/>
<Route path={`/Add/MovieCard/description`} render={()=> <div className="card" style={{width:"50%"}}>
  <h5 className="card-header">Description</h5>
  <div className="card-body">
    
 <p className="card-text">{movieData.description}</p>
    <Link to="/Home">Return to Home </Link>
  </div>
</div>}  />
<Route path="/Home" render={()=><Redirect to="/Home"/>}/>
<Route path={`/Add/MovieCard/trailer`} render={()=><><div style={{width:"50%", height:"50%"}} class="embed-responsive embed-responsive-16by9">
  <iframe className="embed-responsive-item" src={movieData.trailer} allowfullscreen></iframe>
</div>
<Link to="/Home">Return to Home </Link></>


}/>
</Switch>
 
</>
   
  );*/
  

  
  


}
export default MovieCard;