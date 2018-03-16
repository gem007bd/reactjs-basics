import React from "react";

export class Home extends React.Component{
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    setTimeout(()=> {
      this.setState({
        status: 1
      });
    }, 3000);
    console.log("constructor");
  }

  componentWillMount(){
    console.log("Component will mount!");
  }
  componentDidMount(){
    console.log("Component did mount!");
  }
  componentWillReceiveProps(nextProps){
    console.log("Component will receive props" , nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("Should component udpate" , nextProps , nextState);
        return true;
  }
  ComponentWillUpdate(nextProps, nextState){
    console.log("Component will udpate" , nextProps , nextState);
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Component did update" , prevProps , prevState);

  }
  componentWiiUnmount(){
    console.log("Component will unmount");
  }
  onMakeOlder(){
    this.setState({
      age: this.state.age +3
    });
  }
  onChangeLink(){
    this.props.changeLink(this.state.homeLink)
  }
  onHandelChange(event){
    this.setState({
      homeLink: event.target.value
    });

  }
  render(){
    return(
      <div>
          <p>Come from Home Component</p>
      </div>
    );
  }
}
