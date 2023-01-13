import { Component } from "react";

class ClassComp extends Component {
  constructor(props){ //props ları buraad karşılıyoruz

    // props lar extend edilen class ın constructor ına gönderilemlidir.
    super(props);

    this.state = {
      message: "Hello World",
      hour: 15,
      minute: 35
    }
  }

  componentDidMount(){
    console.log("İlk girişte çalışır. (Render)");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("re-render durumunda çalışır");

    if(prevState.hour !== this.state.hour){
      console.log("Saat değişti")
    }

    if(prevState.minute !== this.state.minute){
      console.log("Dakika değişti")
    }
  }


  componentWillUnmount(){
    console.log("Component un mount olduğunda çalışır")
  }





  render() {
    return <div>
        <h1>{this.state.message}</h1>
        <h2>{this.state.hour}:{this.state.minute}</h2>

        <button onClick={()=> this.setState({hour: 19})}>Set Hour</button>
        <button onClick={()=> this.setState({minute: 55})}>Set Minute</button>

    </div>;
  }
}

export default  ClassComp;