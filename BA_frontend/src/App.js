import './App.css';
import { Component } from 'react';

function App() {
return (
<div className="App">
<JsonForm/>
    </div>
  );
}

export default App;


class JsonForm extends Component{

constructor(props){
  super(props)
  this.state={AGE:0,NH_WHITE:0,
  COMM_PT:0,H_F1:0,REG_DAYS:0,PR_PELIG:0,
  E_PELIG:0,POLITICALC:0,
  score:0,result:0};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
  this.setState({[event.target.name]:event.target.value});
}

handleSubmit(event){
  event.preventDefault();
  const url="http://localhost:8000/scoreJson";
  const bodyData=JSON.stringify({"AGE":parseInt(this.state.AGE),"NH_WHITE":parseInt(this.state.NH_WHITE),
    "COMM_PT":parseInt(this.state.COMM_PT),"H_F1":parseInt(this.state.H_F1),
    "REG_DAYS":parseInt(this.state.REG_DAYS),"PR_PELIG":parseInt(this.state.PR_PELIG),
    "E_PELIG":parseInt(this.state.E_PELIG),"POLITICALC":parseInt(this.state.POLITICALC)
});

  const reqOpt ={method:"POST",headers:{"Content-type":"application/json"},body:bodyData};
  console.log(reqOpt)
  fetch(url,reqOpt)
  .then((resp) => resp.json())
  .then((respJ) => this.setState({score:respJ.score}))
}

render(){

return(

<div>

<div class="container-fluid bg-light">
        <nav class="shadow-lg navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="">👇</span>
            </button>
            <img src="https://bucsblade.com/wp-content/uploads/2019/12/big-ass-horseNiseb-1.jpg" className="demoimg" />
            <a className="navbar-brand demo" href="/"><b className="demo">THE DEMOCRATS</b></a> 
          
          </nav>
        </div>


<div className="startIP">

<form onSubmit={this.handleSubmit}>



  

<div class="row row-cols-1 row-cols-md-4">


  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>AGE</h1>
    <div class="form-group">
    <input className="form__input" name="AGE" value={this.state.AGE} onChange={this.handleChange} ></input>
  </div>
  </div>

  <div class="product-image">
	  <img src="https://i.pinimg.com/736x/b2/eb/c9/b2ebc9bdc34fe6d386535fe4312a7b24.jpg" alt="" />
  <div class="info">
	  <p>Voter age in years</p>
    </div></div>
  </div>
  </div>



  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>NH WHITE</h1>
    <div class="form-group">
    <input className="form__input"  name="NH_WHITE" value={this.state.NH_WHITE} onChange={this.handleChange}  ></input>
  </div>
  </div>
  <div class="product-image">
	  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/meghan-doria-lead-1557347876.jpg" alt="" />
  <div class="info">
	  <p>Neighbour average of % non-Hispanic White in household</p>
  </div></div></div>
  </div>



  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>COMM PT</h1>
    <div class="form-group">
    <input className="form__input" name="COMM_PT" value={this.state.COMM_PT} onChange={this.handleChange} ></input>
  </div>
  </div>
  <div class="product-image">
	  <img src="https://api.time.com/wp-content/uploads/2020/07/coronavirus-chicago-transit.jpg" alt="" />
  <div class="info">
	  <p>Neighborhood % of workers who take public transit</p>
  </div></div></div>
  </div>



  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>H F1</h1>
    <div class="form-group">
    <input className="form__input"  name="H_F1" value={this.state.H_F1} onChange={this.handleChange} ></input>
  </div>
  </div>
  <div class="product-image">
	  <img src="https://hips.hearstapps.com/ame-prod-goodhousekeeping-assets.s3.amazonaws.com/main/embedded/22202/karren_brady_-_the_apprentice-female_boss-women_in_work-good_housekeeping_uk.jpg" alt="" />
  <div class="info">
	  <p>Single female household (1=yes)</p>
  </div></div></div>
  </div>



  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>REG DAYS</h1>
    <div class="form-group">
    <input className="form__input" name="REG_DAYS" value={this.state.REG_DAYS} onChange={this.handleChange} ></input>
  </div>
  </div>
  <div class="product-image">
	  <img src="https://media.istockphoto.com/vectors/calendar-vector-illustration-vector-id481297130?k=20&m=481297130&s=612x612&w=0&h=sz-R99mCsScNH7DSOftnkEJOdZ-9nrIOSiAbH_uw1vk=" alt="" />
  <div class="info">
	  <p>Days since voter registered at current address</p>
  </div></div></div>
  </div>  



  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>PR PELIG</h1>
    <div class="form-group">
    <input className="form__input" name="PR_PELIG" value={this.state.PR_PELIG} onChange={this.handleChange} ></input>
  </div>
  </div>
  <div class="product-image">
	  <img src="https://static01.nyt.com/images/2020/03/14/us/politics/00virus-campaigncalendar/merlin_170490123_39d81d68-b61e-4992-9440-8bc68abc6020-mediumSquareAt3X.jpg" alt="" />
  <div class="info">
	  <p>Voted in what % of non-presidential primaries</p>
  </div></div></div>
  </div>  



  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>E PELIG</h1>
    
  <div class="form-group">
    <input className="form__input"  name="E_PELIG" value={this.state.E_PELIG} onChange={this.handleChange} ></input>
  </div>
  </div>
  <div class="product-image">
	  <img src="http://sbhshgovapmacro.files.wordpress.com/2012/11/primary_election_vote.jpg" alt="" />
  <div class="info">
	  <p>Voted in what % of any primaries</p>
  </div></div></div>
  </div>  



  <div class="col">
  <div id="containerrr">	
	<div class="product-details">
	  <h1>POLITICAL C</h1>
    
  <div class="form-group">
  <input className="form__input"  name="POLITICALC" value={this.state.POLITICALC} onChange={this.handleChange} ></input>
  </div>
  </div>
  <div class="product-image">
	  <img src="https://media.istockphoto.com/photos/an-american-flag-proudly-displayed-picture-id1145747989?k=20&m=1145747989&s=612x612&w=0&h=v8_Goly41bt20DPJ7agd-HLLCFNIpW1eMwaMx_XMceg=" alt="" />
  <div class="info">
	  <p>Is there a political contributor in the home (1 = yes)</p>
  </div></div></div>
  </div>


</div>


<div className="answer">

<div class="row">
  <div class="col">
    <button type="submit" class="btn-block">Submit</button>
  </div>
</div>

</div>

<div>
  
<div class="background-two link-container final">
<a class="link-two">{(this.state.score).toFixed(2)}</a>
</div>
</div>
</form>
</div>
</div>);
  }
}