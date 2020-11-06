import React ,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Link,Route} from 'react-router-dom';
import MovieCard from './MovieCard';



const MovieList=({match})=>{
    const [movieData,setState]=useState({title:'',
    description:'',
    rate:0,
    poster:''  ,
    trailer:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"  });

    const [list,setList]=useState([{id:1,info:{title:'Frozen',
     description:'Animation',
     rate:8,
     poster:'https://i.ebayimg.com/images/g/MVoAAOSwHTlbu3ks/s-l640.jpg' ,
    trailer:"https://www.youtube.com/embed/TbQm5doF_Uc"  }}
  
  ])
  let listLink=list.map((item,i)=><li key={i}><Link to={`${match.path}/${item.id}`}>{item.info.title}</Link></li>).reverse()

  const update=(e)=>{
    setState({...movieData,[e.target.name]:e.target.value});
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    setList([...list,{id:list.length+1,info:movieData}]);
    document.getElementById('f').reset();
    setState({title:'',
    description:'',
    rate:0,
    poster:''  ,
    trailer:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"  });
    
    
   
  }
  let add=<form id="f" style={{marginBottom:"50px"}}>
  <fieldset className="form-inline" >
    <legend>Add a new movie </legend>

 <input type="text" className="form-control col-2 mr-sm-2" name="title" placeholder="Title" onChange={update}/>
 <input type="text" className="form-control col-2 mr-sm-2" name="url"placeholder="PosterURL" onChange={update}/>
 <input type="text" className="form-control col-2 mr-sm-2"name="rate" placeholder="Rating" onChange={update}/>
 <input type="text" maxLength="350" className="form-control col-2 mr-sm-2"name="description" placeholder="Description" onChange={update}/>
 <input type="text" className="form-control col-2 mr-sm-2" name="trailer" placeholder="TrailerURL" onChange={update}/>
 
 


</fieldset> <br/>
<button type="submit" className="btn btn-primary col-sm-1" onClick={handleSubmit}>Submit</button>
</form>;
   return(
   <>
    
  
   <Route exact path={`${match.url}`} render={()=><div>
     {add}
      <legend>Movies List:</legend>
     <ul>{listLink}</ul></div>}/>
   <Route path={`${match.url}/:id`} render={(props)=><MovieCard movieData={list} {...props}/>} />
   
   

</>

   );







   /* const update=(e)=>{
      setState({...movieData,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setList([...list,{id:list.length,info:movieData}]);
    
    console.log(list);
    
  }
 

   let element=<form>
    <fieldset className="form-inline" >
      <legend>Add a new movie </legend>
  
   <input type="text" className="form-control col-2 mr-sm-2" name="title" placeholder="Title" onChange={update}/>
   <input type="text" className="form-control col-2 mr-sm-2" name="url"placeholder="PosterURL" onChange={update}/>
   <input type="text" className="form-control col-2 mr-sm-2"name="rate" placeholder="Rating" onChange={update}/>
   <input type="text" maxLength="350" className="form-control col-2 mr-sm-2"name="description" placeholder="Description" onChange={update}/>
   <input type="text" className="form-control col-2 mr-sm-2" name="trailer" placeholder="TrailerURL" onChange={update}/>
   
   


</fieldset> <br/>
<button type="submit" className="btn btn-light col-sm-1" id="sub"><Link  to={`${match.url}/MovieCard`}>Submit</Link></button>
</form>
 
useEffect(() => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    setList([...list,{id:list.length+1,info:movieData}]);
    console.log(list);
  }
  let sub=document.getElementById("sub")

    if(sub)
    sub.addEventListener('click',handleSubmit);
   return () => {
    if(sub)
    sub.removeEventListener('click',handleSubmit);
   }
 },[list]);
 
 
   
return(
      <Switch>
         <Route  path="/MovieList" render={()=> <div>
          <MovieCard movieData={list[0].info}/>
          {list.length>1?<MovieCard movieData={list[1].info}/>:<p>test</p>}
        
         
         </div>
       }/>
     
      <Route path={`${match.path}/MovieCard`} render={()=><MovieCard movieData={movieData}/>}/>
      
      <Route exact path={`${match.path}`} render={()=> element }/>
      
      </Switch>
)*/


}
export default MovieList ;